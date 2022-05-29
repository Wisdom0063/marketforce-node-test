"use strict"

import { agent as _request } from "supertest"

import {app} from '../app'

export const request = _request(app)