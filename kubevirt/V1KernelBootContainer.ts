/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* If set, the VM will be booted from the defined kernel / initrd.
*/
export class V1KernelBootContainer {
    /**
    * Image that container initrd / kernel files.
    */
    'image': string;
    /**
    * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
    */
    'imagePullPolicy'?: string;
    /**
    * ImagePullSecret is the name of the Docker registry secret required to pull the image. The secret must already exist.
    */
    'imagePullSecret'?: string;
    /**
    * the fully-qualified path to the ramdisk image in the host OS
    */
    'initrdPath'?: string;
    /**
    * The fully-qualified path to the kernel image in the host OS
    */
    'kernelPath'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullPolicy",
            "baseName": "imagePullPolicy",
            "type": "string",
            "format": ""
        },
        {
            "name": "imagePullSecret",
            "baseName": "imagePullSecret",
            "type": "string",
            "format": ""
        },
        {
            "name": "initrdPath",
            "baseName": "initrdPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "kernelPath",
            "baseName": "kernelPath",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1KernelBootContainer.attributeTypeMap;
    }

    public constructor() {
    }
}
