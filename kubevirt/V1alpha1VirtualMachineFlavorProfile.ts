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

import { V1CPU } from './V1CPU';

/**
* VirtualMachineFlavorProfile contains definitions that will be applied to VirtualMachine.
*/
export class V1alpha1VirtualMachineFlavorProfile {
    'cpu'?: V1CPU;
    /**
    * Default specifies if this VirtualMachineFlavorProfile is the default for the VirtualMachineFlavor. Zero or one profile can be set to default.
    */
    '_default'?: boolean;
    /**
    * Name specifies the name of this custom profile.
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cpu",
            "baseName": "cpu",
            "type": "V1CPU",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VirtualMachineFlavorProfile.attributeTypeMap;
    }

    public constructor() {
    }
}
