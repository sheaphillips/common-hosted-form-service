var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import baseEditForm from 'formiojs/components/_classes/component/Component.form';
import EditData from './editForm/Orgbook.edit.data';
import EditDisplay from './editForm/Orgbook.edit.display';
import EditValidation from './editForm/Orgbook.edit.validation';
export default function () {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return baseEditForm.apply(void 0, __spreadArrays([[
            {
                key: 'display',
                components: EditDisplay
            },
            {
                key: 'data',
                components: EditData
            },
            {
                key: 'validation',
                components: EditValidation
            }
        ]], extend));
}
