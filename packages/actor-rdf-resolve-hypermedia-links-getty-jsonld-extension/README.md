# Comunica Getty Jsonld Extension RDF Resolve Hypermedia Links Actor

[![npm version](https://badge.fury.io/js/%40comunica%2Factor-rdf-resolve-hypermedia-links-getty-jsonld-extension.svg)](https://www.npmjs.com/package/@comunica/actor-rdf-resolve-hypermedia-links-getty-jsonld-extension)

An RDF Resolve Hypermedia Links actor that adds the .jsonld extension to Getty Vocabulary links

This module is part of the [Comunica framework](https://github.com/comunica/comunica),
and should only be used by [developers that want to build their own query engine](https://comunica.dev/docs/modify/).

[Click here if you just want to query with Comunica](https://comunica.dev/docs/query/).

## Install

```bash
$ yarn add @comunica/actor-rdf-resolve-hypermedia-links-getty-jsonld-extension
```

## Configure

After installing, this package can be added to your engine's configuration as follows:
```text
{
  "@context": [
    ...
    "https://linkedsoftwaredependencies.org/bundles/npm/@comunica/actor-rdf-resolve-hypermedia-links-getty-jsonld-extension/^1.0.0/components/context.jsonld"  
  ],
  "actors": [
    ...
    {
      "@id": "urn:comunica:default:rdf-resolve-hypermedia-links/actors#getty-jsonld-extension",
      "@type": "ActorRdfResolveHypermediaLinksGettyJsonldExtension"
    }
  ]
}
```

### Config Parameters

TODO: fill in parameters (this section can be removed if there are none)

* `someParam`: Description of the param
