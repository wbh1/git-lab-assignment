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
>>>>>>> Changed the way the filtered content works to work with events
import {EventService, NavigationService} from "../../services/index";
import {Router} from "aurelia-router";
import {ConfigurationHolder} from "../../resources/configuration-holder";

@inject(EventService, Router, NavigationService, ConfigurationHolder)
export class EventsList {

    @bindable ({defaultBindingMode: bindingMode.twoWay}) filteredEvents = []

    constructor(eventService, router, navigationService, configurationHolder) {
        this.eventService = eventService
        this.router = router
        this.navigationService = navigationService
        this.events = eventService.list()
        this.events.promise.then((events) => this.filteredEvents = events)

        this.eventsImageURL = configurationHolder.get('eventsImageURL')
    }

    show(event) {
        this.navigationService.go(event)
    }

}
