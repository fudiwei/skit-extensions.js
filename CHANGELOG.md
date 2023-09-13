# CHANGELOG

---

## Release 0.5.2

-   **Bug Fixes**:

    -   Fixed TypeScript declarations.

## Release 0.5.1

-   **Bug Fixes**:

    -   Fixed incorrect return value of `Boolean.from`.

    -   Fixed TypeScript declarations.

## Release 0.5.0

-   **Features**:

    -   Added `Function.$noop`.

    -   Added `Object.$deepEquals`.

    -   Added `Array.prototype.$groupByToMap`.

-   **Breaking Changes**:

    -   The returned Promise will not be rejected in `Function.$debounce` and `Function.$throttle`.

## Release 0.4.2

-   **Bug Fixes**:

    -   Fixed `String.$equalsIgnoreCase`.

## Release 0.4.1

-   **Bug Fixes**:

    -   Fixed TypeScript declarations.

## Release 0.4.0

-   **Features**:

    -   Added support for return types of `Function.$debounce` and `Function.$throttle`.

-   **Breaking Changes**:

    -   Becomes incompatible with runtimes that do not support `Promise`.

    -   Makes `Date.prototype.$unix` not change the value of this Date object.

    -   Makes `Date.prototype.$addMilliseconds`, `Date.prototype.addSeconds`, `Date.prototype.addMinutes`, `Date.prototype.addHours`, `Date.prototype.addDays`, `Date.prototype.addMonths`, `Date.prototype.addYears` not change the value of this Date object.

## Release 0.3.0

-   **Features**:

    -   Added `Promise.$waitUntil` and `Promise.$waitWhile`.

-   **Bug Fixes**:

    -   Fixed `Date.prototype.$addMonths`.

    -   Fixed TypeScript declarations.

## Release 0.2.0

-   **Features**:

    -   Added `Array.prototype.$min`, `Array.prototype.$minBy`, `Array.prototype.$max` and `Array.prototype.$maxBy`.

    -   Added `Array.prototype.$groupBy`.

-   **Bug Fixes**:

    -   Fixed TypeScript declarations.

-   **Breaking Changes**:

    -   Renames `Date.prototype.$zeroTime` to `Date.prototype.$midnight`.

## Release 0.1.0

-   First Release.
