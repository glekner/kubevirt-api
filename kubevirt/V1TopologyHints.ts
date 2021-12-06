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


export class V1TopologyHints {
    'tscFrequency'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tscFrequency",
            "baseName": "tscFrequency",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return V1TopologyHints.attributeTypeMap;
    }

    public constructor() {
    }
}
