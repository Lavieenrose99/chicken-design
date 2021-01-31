export declare type Kind = 'info' | 'positive' | 'negative' | 'warning';
export declare type KindMap = Record<Kind, string>;
export interface AlertProps {
    /**
     * Set this to change alert kind
     * @default info
     */
    kind?: 'success' | 'info' | 'positive' | 'negative' | 'warning';
    className?: string;
    title?: string;
}
