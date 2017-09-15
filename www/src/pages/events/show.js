/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from "aurelia-framework";
import {EventService, MessageService} from "../../services/index";
import {Router} from "aurelia-router";
import {ConfigurationHolder} from "../../resources/configuration-holder";

@inject(EventService, Router, MessageService, ConfigurationHolder)
export class EventsShow {

    constructor(eventService, router, messageService, configurationHolder) {
        this.eventService = eventService
        this.router = router
        this.messageService = messageService

        this.eventsImageURL = configurationHolder.get('eventsImageURL')
    }

    activate(params) {
        if (!params.id) {
            this.messageService.error("Internal Application Error", true)
            this.router.navigateBack()
            return
        }

        this.event = this.eventService.findOne(params.id);
        this.event.promise.then((event) => {
            event.location = event.location.replace(/\\/g, '');
        })
    }

}
