/*
 * Copyright (c) 2016 by SharpTop Software, LLC
 * All rights reserved. No part of this software project may be used, reproduced, distributed, or transmitted in any
 * form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior
 * written permission of SharpTop Software, LLC. For permission requests, write to the author at info@sharptop.co.
 */

import {inject} from 'aurelia-framework'
<<<<<<< HEAD
import {PrayerRequestService, NavigationService} from '../../services/index'
=======
import {PrayerRequestService, NavigationService, MessageService} from 'services/index'
import {Router} from "aurelia-router";
import {PagedContentResolver} from "resources/templates/paged-content/paged-content-resolver"
import {PagedContentMemory} from "resources/templates/paged-content/paged-content-memory"
<<<<<<< HEAD
>>>>>>> Fix prayer requests

@inject(PrayerRequestService, NavigationService)
export class PrayerRequestsList {

    constructor(prayerRequestService, navigationService) {
        this.prayerRequestService = prayerRequestService
        this.navigationService = navigationService
        this.prayerRequests = prayerRequestService.list()
=======
import {ConfigurationHolder} from "../../resources/configuration-holder"

@inject(PrayerRequestService, NavigationService, Router, MessageService, PagedContentResolver.of(PagedContentMemory), ConfigurationHolder)
export class PrayerRequestsList {

    pagedContentMemory

    constructor(prayerRequestService, navigationService, router, messageService, pagedContentResolver, configurationHolder) {
        this.prayerRequestService = prayerRequestService
        this.navigationService = navigationService
        this.router = router
        this.messageService = messageService
        this.pagedContentResolver = pagedContentResolver

        this.prayerTimeImageURL = configurationHolder.get('prayerTimeImageURL')
>>>>>>> use the configurationHolder for the prayerRequest images.
    }

    show(prayerRequest) {
        this.navigationService.go(prayerRequest)
    }
}
