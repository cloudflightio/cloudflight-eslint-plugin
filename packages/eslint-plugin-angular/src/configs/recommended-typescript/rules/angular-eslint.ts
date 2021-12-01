import { Linter } from 'eslint';
import { componentClassSuffix } from './@angular-eslint/component-class-suffix';
import { contextualDecorator } from './@angular-eslint/contextual-decorator';
import { contextualLifecycle } from './@angular-eslint/contextual-lifecycle';
import { directiveClassSuffix } from './@angular-eslint/directive-class-suffix';
import { noConflictingLifecycle } from './@angular-eslint/no-conflicting-lifecycle';
import { noHostMetadataProperty } from './@angular-eslint/no-host-metadata-property';
import { noInputRename } from './@angular-eslint/no-input-rename';
import { noInputsMetadataProperty } from './@angular-eslint/no-inputs-metadata-property';
import { noOutputNative } from './@angular-eslint/no-output-native';
import { noOutputOnPrefix } from './@angular-eslint/no-output-on-prefix';
import { noOutputRename } from './@angular-eslint/no-output-rename';
import { noOutputsMetadataProperty } from './@angular-eslint/no-outputs-metadata-property';
import { preferOutputReadonly } from './@angular-eslint/prefer-output-readonly';
import { useLifecycleInterface } from './@angular-eslint/use-lifecycle-interface';
import { usePipeTransformInterface } from './@angular-eslint/use-pipe-transform-interface';

const pluginPrefix = '@angular-eslint';

export const angularEslintRules: Linter.RulesRecord = {
    [`${pluginPrefix}/${componentClassSuffix.name}`]: componentClassSuffix.options,
    [`${pluginPrefix}/${contextualDecorator.name}`]: contextualDecorator.options,
    [`${pluginPrefix}/${contextualLifecycle.name}`]: contextualLifecycle.options,
    [`${pluginPrefix}/${directiveClassSuffix.name}`]: directiveClassSuffix.options,
    [`${pluginPrefix}/${noConflictingLifecycle.name}`]: noConflictingLifecycle.options,
    [`${pluginPrefix}/${noHostMetadataProperty.name}`]: noHostMetadataProperty.options,
    [`${pluginPrefix}/${noInputRename.name}`]: noInputRename.options,
    [`${pluginPrefix}/${noInputsMetadataProperty.name}`]: noInputsMetadataProperty.options,
    [`${pluginPrefix}/${noOutputNative.name}`]: noOutputNative.options,
    [`${pluginPrefix}/${noOutputOnPrefix.name}`]: noOutputOnPrefix.options,
    [`${pluginPrefix}/${noOutputRename.name}`]: noOutputRename.options,
    [`${pluginPrefix}/${noOutputsMetadataProperty.name}`]: noOutputsMetadataProperty.options,
    [`${pluginPrefix}/${preferOutputReadonly.name}`]: preferOutputReadonly.options,
    [`${pluginPrefix}/${useLifecycleInterface.name}`]: useLifecycleInterface.options,
    [`${pluginPrefix}/${usePipeTransformInterface.name}`]: usePipeTransformInterface.options,
};
