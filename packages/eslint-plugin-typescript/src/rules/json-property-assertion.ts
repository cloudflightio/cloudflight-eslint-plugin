/**
 * Describes a property path and it's expected value for eslint rule validation.
 */
export interface JsonPropertyAssertion {
    /**
     * The path to the property, which should be validated.
     * Uses dot notation to check nested properties.
     *
     * @example `compilerOptions.allowUnreachableCode` for `{"compilerOptions": {"allowUnreachableCode": false}}`
     */
    key: string;
    /**
     * The expected value of the property.
     * Used for validation and also for applying an automatic fix.
     */
    expectedValue: unknown;
}
