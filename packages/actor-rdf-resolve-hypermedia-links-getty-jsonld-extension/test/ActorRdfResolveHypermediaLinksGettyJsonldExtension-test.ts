import { Bus } from '@comunica/core';
import { ActorRdfResolveHypermediaLinksGettyJsonldExtension } from '../lib/ActorRdfResolveHypermediaLinksGettyJsonldExtension';

describe('ActorRdfResolveHypermediaLinksGettyJsonldExtension', () => {
  let bus: any;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
  });

  describe('An ActorRdfResolveHypermediaLinksGettyJsonldExtension instance', () => {
    let actor: ActorRdfResolveHypermediaLinksGettyJsonldExtension;

    beforeEach(() => {
      actor = new ActorRdfResolveHypermediaLinksGettyJsonldExtension({ name: 'actor', bus });
    });

    it('should test', () => {
      return expect(actor.test({ todo: true })).resolves.toEqual({ todo: true }); // TODO
    });

    it('should run', () => {
      return expect(actor.run({ todo: true })).resolves.toMatchObject({ todo: true }); // TODO
    });
  });
});
