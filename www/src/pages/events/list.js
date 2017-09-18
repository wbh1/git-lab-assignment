<<<<<<< HEAD
/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from "aurelia-framework";
=======
import {inject, bindable, bindingMode} from "aurelia-framework";
<<<<<<< HEAD
>>>>>>> Changed the way the filtered content works to work with events
=======
import {EventAggregator} from "aurelia-event-aggregator";
>>>>>>> also update the events list when the cache updates
import {EventService, NavigationService} from "../../services/index";
import {Router} from "aurelia-router";
import {ConfigurationHolder} from "../../resources/configuration-holder";

@inject(EventService, Router, NavigationService, ConfigurationHolder, EventAggregator)
export class EventsList {

    @bindable ({defaultBindingMode: bindingMode.twoWay}) filteredEvents = []

    constructor(eventService, router, navigationService, configurationHolder, EventAggregator) {
        this.eventService = eventService
        this.router = router
        this.navigationService = navigationService
        this.eventAggregator = EventAggregator

        this.eventsImageURL = configurationHolder.get('eventsImageURL')

        this.eventAggregator.subscribe('events.cache.updated', () => this.loadEvents())
        this.loadEvents()
    }

    loadEvents() {
        this.events = eventService.list()
        this.events.promise.then((events) => this.filteredEvents = events)
    }

    show(event) {
        this.navigationService.go(event)
    }

}
