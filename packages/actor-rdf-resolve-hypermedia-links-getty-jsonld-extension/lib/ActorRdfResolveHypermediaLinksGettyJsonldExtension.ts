import type {
  IActionRdfResolveHypermediaLinks,
  IActorRdfResolveHypermediaLinksOutput,
  IActorRdfResolveHypermediaLinksArgs,
  MediatorRdfResolveHypermediaLinks,
} from '@comunica/bus-rdf-resolve-hypermedia-links';
import { ActorRdfResolveHypermediaLinks } from '@comunica/bus-rdf-resolve-hypermedia-links';
import { ActionContextKey, type IActorTest } from '@comunica/core';

/**
 * An RDF Resolve Hypermedia Links actor that adds the .jsonld extension to Getty Vocabulary links
 */
export class ActorRdfResolveHypermediaLinksGettyJsonldExtension extends ActorRdfResolveHypermediaLinks {
  public readonly mediatorRdfResolveHypermediaLinks: MediatorRdfResolveHypermediaLinks;
  private readonly gettyUriRegex = /^https?:\/\/vocab\.getty\.edu\/.+$/u;
  private readonly extensions = [ '.json', '.jsonld', '.rdf', '.n3', '.ttl', '.nt' ];

  public constructor(args: IActorRdfResolveHypermediaLinksGettyJsonldExtensionArgs) {
    super(args);
  }

  public async test(action: IActionRdfResolveHypermediaLinks): Promise<IActorTest> {
    if (action.context.get(KEY_CONTEXT_EXTENDED)) {
      throw new Error('Already checked for Getty links');
    }
    return true;
  }

  public async run(action: IActionRdfResolveHypermediaLinks): Promise<IActorRdfResolveHypermediaLinksOutput> {
    const links = action.metadata.traverse.map((link: { url: string }) => {
      if (this.gettyUriRegex.test(link.url)) {
        const hasExtension = this.extensions.some(ext => link.url.endsWith(ext));
        if (!hasExtension) {
          const oldUrl = link.url;
          const newUrl = `${oldUrl}.jsonld`;
          link.url = newUrl;
          this.logInfo(action.context, `Updated ${oldUrl} to ${newUrl}`);
        }
      }
      return link;
    });

    // Update metadata in action
    const context = action.context.set(KEY_CONTEXT_EXTENDED, true);
    const subAction = { ...action, context, metadata: { ...action.metadata, traverse: links }};

    // Forward updated metadata to next actor
    return this.mediatorRdfResolveHypermediaLinks.mediate(subAction);
  }
}

export interface IActorRdfResolveHypermediaLinksGettyJsonldExtensionArgs extends IActorRdfResolveHypermediaLinksArgs {
  /**
   * Mediator over the rdf-resolve-hypermedia-links bus.
   */
  mediatorRdfResolveHypermediaLinks: MediatorRdfResolveHypermediaLinks;
}

export const KEY_CONTEXT_EXTENDED = new ActionContextKey<boolean>(
  '@comunica/actor-rdf-resolve-hypermedia-links-getty-jsonld-extension:extended',
);
