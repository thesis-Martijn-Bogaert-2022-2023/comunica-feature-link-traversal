import { Bus } from '@comunica/core';
import { ActorRdfResolveHypermediaLinksStadGentReplaceId } from '../lib/ActorRdfResolveHypermediaLinksStadGentReplaceId';

describe('ActorRdfResolveHypermediaLinksStadGentReplaceId', () => {
  let bus: any;

  beforeEach(() => {
    bus = new Bus({ name: 'bus' });
  });

  describe('An ActorRdfResolveHypermediaLinksStadGentReplaceId instance', () => {
    let actor: ActorRdfResolveHypermediaLinksStadGentReplaceId;

    beforeEach(() => {
      actor = new ActorRdfResolveHypermediaLinksStadGentReplaceId({ name: 'actor', bus });
    });

    it('should test', () => {
      return expect(actor.test({ todo: true })).resolves.toEqual({ todo: true }); // TODO
    });

    it('should run', () => {
      return expect(actor.run({ todo: true })).resolves.toMatchObject({ todo: true }); // TODO
    });
  });
});
