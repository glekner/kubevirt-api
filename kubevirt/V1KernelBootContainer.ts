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
 * If set, the VM will be booted from the defined kernel / initrd.
 * @export
 * @interface V1KernelBootContainer
 */
export interface V1KernelBootContainer {
    /**
     * Image that contains initrd / kernel files.
     * @type {string}
     * @memberof V1KernelBootContainer
     */
    image: string;
    /**
     * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
     * @type {string}
     * @memberof V1KernelBootContainer
     */
    imagePullPolicy?: string;
    /**
     * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
     * @type {string}
     * @memberof V1KernelBootContainer
     */
    imagePullSecret?: string;
    /**
     * the fully-qualified path to the ramdisk image in the host OS
     * @type {string}
     * @memberof V1KernelBootContainer
     */
    initrdPath?: string;
    /**
     * The fully-qualified path to the kernel image in the host OS
     * @type {string}
     * @memberof V1KernelBootContainer
     */
    kernelPath?: string;
}

export function V1KernelBootContainerFromJSON(json: any): V1KernelBootContainer {
    return V1KernelBootContainerFromJSONTyped(json, false);
}

export function V1KernelBootContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1KernelBootContainer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': json['image'],
        'imagePullPolicy': !exists(json, 'imagePullPolicy') ? undefined : json['imagePullPolicy'],
        'imagePullSecret': !exists(json, 'imagePullSecret') ? undefined : json['imagePullSecret'],
        'initrdPath': !exists(json, 'initrdPath') ? undefined : json['initrdPath'],
        'kernelPath': !exists(json, 'kernelPath') ? undefined : json['kernelPath'],
    };
}

export function V1KernelBootContainerToJSON(value?: V1KernelBootContainer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': value.image,
        'imagePullPolicy': value.imagePullPolicy,
        'imagePullSecret': value.imagePullSecret,
        'initrdPath': value.initrdPath,
        'kernelPath': value.kernelPath,
    };
}

