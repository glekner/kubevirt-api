/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration,
    IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationFromJSON,
    IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationFromJSONTyped,
    IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationToJSON,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ListMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * MutatingWebhookConfigurationList is a list of MutatingWebhookConfiguration.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
 */
export interface IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
     */
    apiVersion?: string;
    /**
     * List of MutatingWebhookConfiguration.
     * @type {Array<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>}
     * @memberof IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
     */
    items: Array<IoK8sApiAdmissionregistrationV1MutatingWebhookConfiguration>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListFromJSON(json: any): IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {
    return IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'items': ((json['items'] as Array<any>).map(IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
    };
}

export function IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationListToJSON(value?: IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'items': ((value.items as Array<any>).map(IoK8sApiAdmissionregistrationV1MutatingWebhookConfigurationToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
    };
}
