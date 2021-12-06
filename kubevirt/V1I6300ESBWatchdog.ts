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
* i6300esb watchdog device.
*/
export class V1I6300ESBWatchdog {
    /**
    * The action to take. Valid values are poweroff, reset, shutdown. Defaults to reset.
    */
    'action'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1I6300ESBWatchdog.attributeTypeMap;
    }

    public constructor() {
    }
}
