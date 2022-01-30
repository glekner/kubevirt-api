/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * VolumeRestore contains the data neeed to restore a PVC
 * @export
 * @interface V1alpha1VolumeRestore
 */
export interface V1alpha1VolumeRestore {
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeRestore
     */
    dataVolumeName?: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeRestore
     */
    persistentVolumeClaim: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeRestore
     */
    volumeName: string;
    /**
     * 
     * @type {string}
     * @memberof V1alpha1VolumeRestore
     */
    volumeSnapshotName: string;
}

export function V1alpha1VolumeRestoreFromJSON(json: any): V1alpha1VolumeRestore {
    return V1alpha1VolumeRestoreFromJSONTyped(json, false);
}

export function V1alpha1VolumeRestoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VolumeRestore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataVolumeName': !exists(json, 'dataVolumeName') ? undefined : json['dataVolumeName'],
        'persistentVolumeClaim': json['persistentVolumeClaim'],
        'volumeName': json['volumeName'],
        'volumeSnapshotName': json['volumeSnapshotName'],
    };
}

export function V1alpha1VolumeRestoreToJSON(value?: V1alpha1VolumeRestore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataVolumeName': value.dataVolumeName,
        'persistentVolumeClaim': value.persistentVolumeClaim,
        'volumeName': value.volumeName,
        'volumeSnapshotName': value.volumeSnapshotName,
    };
}

