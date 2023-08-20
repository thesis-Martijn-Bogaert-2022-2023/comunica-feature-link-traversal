# Comunica Stad Gent Replace Id RDF Resolve Hypermedia Links Actor

[![npm version](https://badge.fury.io/js/%40comunica%2Factor-rdf-resolve-hypermedia-links-stad-gent-replace-id.svg)](https://www.npmjs.com/package/@comunica/actor-rdf-resolve-hypermedia-links-stad-gent-replace-id)

An RDF Resolve Hypermedia Links actor that replaces `id` by `data` in Stad Gent links

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/actor-rdf-resolve-hypermedia-links-stad-gent-replace-id
```

## Configure

After installing, this package can be added to your engine's configuration as follows:
```text
{
  "@context": [
    ...
    "https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-rdf-resolve-hypermedia-links-stad-gent-replace-id/^1.0.0/components/context.jsonld"  
  ],
  "actors": [
    ...
    {
      "@id": "urn:comunica:default:rdf-resolve-hypermedia-links/actors#stad-gent-replace-id",
      "@type": "ActorRdfResolveHypermediaLinksStadGentReplaceId"
    }
  ]
}
```

### Config Parameters

TODO: fill in parameters (this section can be removed if there are none)

* `someParam`: Description of the param
