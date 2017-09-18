/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from "aurelia-framework";
import {Endpoint} from "aurelia-api";
import {EventAggregator} from "aurelia-event-aggregator";
import {ResourceService} from "./resource-service";
import {Event} from 'models/index'

<<<<<<< HEAD
@inject(Endpoint.of('api'))
export class EventService extends ResourceService {

    constructor(api) {
        super(api, Event)
    }

=======
@inject(Endpoint.of('api'), ObjectCache, EventAggregator)
export class EventService extends ResourceService {

    lastUpdated

    constructor(api, objectCache, EventAggregator) {
        super(api, Event, objectCache)
        this.objectCache = objectCache
        this.eventAggregator = EventAggregator

        setInterval(() => this.refreshCache(), 60000)
    }

    list() {
        if (this.objectCache.has(Event.domainClass)) {
            return this.objectCache.get(Event.domainClass)
        }

        let eventsList = super.list()

        this.cacheEventsList(eventsList)

        return eventsList
    }

    cacheEventsList(events) {
        events.promise.then((res) => {
            console.log("Updating Events Cache")
            this.objectCache.set(Event.domainClass, res)
            this.objectCache.traverse(res)
            this.lastUpdated = Date.now()
            this.eventAggregator.publish("events.cache.updated")
        })
    }

    refreshCache() {
        console.log("Checking Events List Cache for freshness")
        if (Date.now() - this.lastUpdated > 600000) {
            console.log("Refreshing Events List")
            this.cacheEventsList(super.list())
        }
    }
>>>>>>> also update the events list when the cache updates
}
