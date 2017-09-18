/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from "aurelia-framework";
import {EventAggregator} from "aurelia-event-aggregator";
import {Endpoint} from "aurelia-api";
import {ResourceService} from "./resource-service";
import {Feed} from "models/index"

<<<<<<< HEAD
@inject(Endpoint.of('api'))
export class FeedService extends ResourceService {

    constructor(api) {
        super(api, Feed)
=======
@inject(Endpoint.of('api'), ObjectCache, EventAggregator)
export class FeedService extends ResourceService {

    lastUpdated

    constructor(api, objectCache, EventAggregator) {
        super(api, Feed)
        this.objectCache = objectCache
        this.eventAggregator = EventAggregator

        setInterval(() => this.refreshCache(), 60000)
    }

    findOne(id) {
        if (this.objectCache.has(Feed.domainClass)) {
            return this.objectCache.get(Feed.domainClass)
        }

        let feed = super.findOne(id)

        this.cacheFeed(feed)

        return feed
    }


    cacheFeed(feed) {
        feed.promise.then((res) => {
            console.log("Updating Feed Cache")
            this.objectCache.set(Feed.domainClass, res)
            this.objectCache.traverse(res)
            this.lastUpdated = Date.now()
            this.eventAggregator.publish("feed.cache.updated")
        })
    }

    refreshCache() {
        console.log("Checking Feed Cache for freshness")
        if (Date.now() - this.lastUpdated > 30000) {
            console.log("Refreshing Feed")
            this.cacheFeed(super.findOne())
        }
>>>>>>> Update the feed when the feed cache gets refreshed.
    }

}
