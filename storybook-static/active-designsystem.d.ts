import { AllowedComponentProps } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { VNodeProps } from 'vue';

export declare const InputNumber: DefineComponent<{
    /**
     * Actual value to display
     */
    modelValue: {
        type: NumberConstructor;
        required: false;
    };
    /**
     * Step increment/decrement value
     */
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    /**
     * Size of input
     */
    size: {
        validator(value: string): boolean;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (newValue: number) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    /**
     * Actual value to display
     */
    modelValue: {
        type: NumberConstructor;
        required: false;
    };
    /**
     * Step increment/decrement value
     */
    step: {
        type: NumberConstructor;
        required: false;
        default: number;
    };
    /**
     * Size of input
     */
    size: {
        validator(value: string): boolean;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (newValue: number) => any;
}, {
    step: number;
    size: string;
}, {}>;

export declare const InputText: DefineComponent<{
    /**
     * Actual value to display
     */
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        validator(value: string): boolean;
        required: false;
        default: string;
    };
    /**
     * Actual value to display
     */
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (newValue: string) => void;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    /**
     * Actual value to display
     */
    modelValue: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        validator(value: string): boolean;
        required: false;
        default: string;
    };
    /**
     * Actual value to display
     */
    placeholder: {
        type: StringConstructor;
        required: false;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (newValue: string) => any;
}, {
    modelValue: string;
    size: string;
    placeholder: string;
}, {}>;

export { }
