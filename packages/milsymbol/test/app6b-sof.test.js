import { ms } from "../src/milsymbol.js";
ms.reset();

import { app6b } from "stanag-app6";
import verify from "./letter-sidc.js";
ms.setStandard("APP6");

import { sof } from "../src/lettersidc.js";
ms.addIcons(sof);

export default verify(ms, "APP-6 B SOF", app6b.WAR.SOFUNT);
