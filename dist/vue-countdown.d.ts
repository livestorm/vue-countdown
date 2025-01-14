declare const _default: import("vue").DefineComponent<{
    /**
     * Starts the countdown automatically when initialized.
     */
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Emits the countdown events.
     */
    emitEvents: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The interval time (in milliseconds) of the countdown progress.
     */
    interval: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * Generate the current time of a specific time zone.
     */
    now: {
        type: FunctionConstructor;
        default: () => number;
    };
    /**
     * The tag name of the component's root element.
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The time (in milliseconds) to count down from.
     */
    time: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * Transforms the output props before render.
     */
    transform: {
        type: FunctionConstructor;
        default: (props: unknown) => unknown;
    };
}, unknown, {
    /**
     * It is counting down.
     * @type {boolean}
     */
    counting: boolean;
    /**
     * The absolute end time.
     * @type {number}
     */
    endTime: number;
    /**
     * The remaining milliseconds.
     * @type {number}
     */
    totalMilliseconds: number;
    /**
     * The request ID of the requestAnimationFrame.
     * @type {number}
     */
    requestId: number;
}, {
    /**
     * Remaining days.
     * @returns {number} The computed value.
     */
    days(): number;
    /**
     * Remaining hours.
     * @returns {number} The computed value.
     */
    hours(): number;
    /**
     * Remaining minutes.
     * @returns {number} The computed value.
     */
    minutes(): number;
    /**
     * Remaining seconds.
     * @returns {number} The computed value.
     */
    seconds(): number;
    /**
     * Remaining milliseconds.
     * @returns {number} The computed value.
     */
    milliseconds(): number;
    /**
     * Total remaining days.
     * @returns {number} The computed value.
     */
    totalDays(): number;
    /**
     * Total remaining hours.
     * @returns {number} The computed value.
     */
    totalHours(): number;
    /**
     * Total remaining minutes.
     * @returns {number} The computed value.
     */
    totalMinutes(): number;
    /**
     * Total remaining seconds.
     * @returns {number} The computed value.
     */
    totalSeconds(): number;
}, {
    /**
     * Starts to countdown.
     * @public
     * @emits Countdown#start
     */
    start(): void;
    /**
     * Continues the countdown.
     * @private
     */
    continue(): void;
    /**
     * Pauses the countdown.
     * @private
     */
    pause(): void;
    /**
     * Progresses to countdown.
     * @private
     * @emits Countdown#progress
     */
    progress(): void;
    /**
     * Aborts the countdown.
     * @public
     * @emits Countdown#abort
     */
    abort(): void;
    /**
     * Ends the countdown.
     * @public
     * @emits Countdown#end
     */
    end(): void;
    /**
     * Updates the count.
     * @private
     */
    update(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("abort" | "end" | "progress" | "start")[], "abort" | "end" | "progress" | "start", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * Starts the countdown automatically when initialized.
     */
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Emits the countdown events.
     */
    emitEvents: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * The interval time (in milliseconds) of the countdown progress.
     */
    interval: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * Generate the current time of a specific time zone.
     */
    now: {
        type: FunctionConstructor;
        default: () => number;
    };
    /**
     * The tag name of the component's root element.
     */
    tag: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The time (in milliseconds) to count down from.
     */
    time: {
        type: NumberConstructor;
        default: number;
        validator: (value: number) => boolean;
    };
    /**
     * Transforms the output props before render.
     */
    transform: {
        type: FunctionConstructor;
        default: (props: unknown) => unknown;
    };
}>> & {
    onAbort?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onProgress?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
}, {
    autoStart: boolean;
    emitEvents: boolean;
    interval: number;
    now: Function;
    tag: string;
    time: number;
    transform: Function;
}>;
export default _default;
