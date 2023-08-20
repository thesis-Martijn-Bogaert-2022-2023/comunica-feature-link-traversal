import type {
  IActionRdfResolveHypermediaLinks,
  IActorRdfResolveHypermediaLinksOutput,
  IActorRdfResolveHypermediaLinksArgs,
  MediatorRdfResolveHypermediaLinks,
} from '@comunica/bus-rdf-resolve-hypermedia-links';
import { ActorRdfResolveHypermediaLinks } from '@comunica/bus-rdf-resolve-hypermedia-links';
import { ActionContextKey, type IActorTest } from '@comunica/core';

/**
 * An RDF Resolve Hypermedia Links actor that replaces "id" by "data" in Stad Gent links
 */
export class ActorRdfResolveHypermediaLinksStadGentReplaceId extends ActorRdfResolveHypermediaLinks {
  public readonly mediatorRdfResolveHypermediaLinks: MediatorRdfResolveHypermediaLinks;
  private readonly stadGentUriRegex = /^https?:\/\/stad\.gent\/id\/.+$/u;

  public constructor(args: IActorRdfResolveHypermediaLinksStadGentReplaceIdArgs) {
    super(args);
  }

  public async test(action: IActionRdfResolveHypermediaLinks): Promise<IActorTest> {
    if (action.context.get(KEY_CONTEXT_REPLACED)) {
      throw new Error('Already checked for Stad Gent links');
    }
    return true;
  }

  public async run(action: IActionRdfResolveHypermediaLinks): Promise<IActorRdfResolveHypermediaLinksOutput> {
    const links = action.metadata.traverse.map((link: { url: string }) => {
      if (this.stadGentUriRegex.test(link.url)) {
        const oldUrl = link.url;
        const newUrl = oldUrl.replace('/id/', '/data/');
        link.url = newUrl;
        this.logInfo(action.context, `Updated ${oldUrl} to ${newUrl}`);
      }
      return link;
    });

    // Update metadata in action
    const context = action.context.set(KEY_CONTEXT_REPLACED, true);
    const subAction = { ...action, context, metadata: { ...action.metadata, traverse: links }};

    // Forward updated metadata to next actor
    return this.mediatorRdfResolveHypermediaLinks.mediate(subAction);
  }
}

export interface IActorRdfResolveHypermediaLinksStadGentReplaceIdArgs extends IActorRdfResolveHypermediaLinksArgs {
  /**
   * Mediator over the rdf-resolve-hypermedia-links bus.
   */
  mediatorRdfResolveHypermediaLinks: MediatorRdfResolveHypermediaLinks;
}

export const KEY_CONTEXT_REPLACED = new ActionContextKey<boolean>(
  '@comunica/actor-rdf-resolve-hypermedia-links-getty-jsonld-extension:replaced',
);
