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
    IoK8sApiAppsV1ReplicaSetSpec,
    IoK8sApiAppsV1ReplicaSetSpecFromJSON,
    IoK8sApiAppsV1ReplicaSetSpecFromJSONTyped,
    IoK8sApiAppsV1ReplicaSetSpecToJSON,
    IoK8sApiAppsV1ReplicaSetStatus,
    IoK8sApiAppsV1ReplicaSetStatusFromJSON,
    IoK8sApiAppsV1ReplicaSetStatusFromJSONTyped,
    IoK8sApiAppsV1ReplicaSetStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ReplicaSet ensures that a specified number of pod replicas are running at any given time.
 * @export
 * @interface IoK8sApiAppsV1ReplicaSet
 */
export interface IoK8sApiAppsV1ReplicaSet {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSet
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1ReplicaSet
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAppsV1ReplicaSet
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiAppsV1ReplicaSetSpec}
     * @memberof IoK8sApiAppsV1ReplicaSet
     */
    spec?: IoK8sApiAppsV1ReplicaSetSpec;
    /**
     * 
     * @type {IoK8sApiAppsV1ReplicaSetStatus}
     * @memberof IoK8sApiAppsV1ReplicaSet
     */
    status?: IoK8sApiAppsV1ReplicaSetStatus;
}

export function IoK8sApiAppsV1ReplicaSetFromJSON(json: any): IoK8sApiAppsV1ReplicaSet {
    return IoK8sApiAppsV1ReplicaSetFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1ReplicaSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAppsV1ReplicaSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiAppsV1ReplicaSetSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiAppsV1ReplicaSetStatusFromJSON(json['status']),
    };
}

export function IoK8sApiAppsV1ReplicaSetToJSON(value?: IoK8sApiAppsV1ReplicaSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiAppsV1ReplicaSetSpecToJSON(value.spec),
        'status': IoK8sApiAppsV1ReplicaSetStatusToJSON(value.status),
    };
}
