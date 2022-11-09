#!/usr/bin/env bash

next src_cdn -p 3006 &
npm run dev:testsite &
npm run dev:gregorycowley &
npm run dev:cowleystudios &