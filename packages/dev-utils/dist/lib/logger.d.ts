type ColorType = 'success' | 'info' | 'error' | 'warning' | keyof typeof COLORS;
export declare function colorLog(message: string, type: ColorType): void;
declare const COLORS: {
    readonly Reset: "\u001B[0m";
    readonly Bright: "\u001B[1m";
    readonly Dim: "\u001B[2m";
    readonly Underscore: "\u001B[4m";
    readonly Blink: "\u001B[5m";
    readonly Reverse: "\u001B[7m";
    readonly Hidden: "\u001B[8m";
    readonly FgBlack: "\u001B[30m";
    readonly FgRed: "\u001B[31m";
    readonly FgGreen: "\u001B[32m";
    readonly FgYellow: "\u001B[33m";
    readonly FgBlue: "\u001B[34m";
    readonly FgMagenta: "\u001B[35m";
    readonly FgCyan: "\u001B[36m";
    readonly FgWhite: "\u001B[37m";
    readonly BgBlack: "\u001B[40m";
    readonly BgRed: "\u001B[41m";
    readonly BgGreen: "\u001B[42m";
    readonly BgYellow: "\u001B[43m";
    readonly BgBlue: "\u001B[44m";
    readonly BgMagenta: "\u001B[45m";
    readonly BgCyan: "\u001B[46m";
    readonly BgWhite: "\u001B[47m";
};
export {};
