/*
 * Copyright 2018 NEM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {namespaceId as NamespaceIdGenerator} from '@thomas.tran/nem2-library';
import {Id} from '../Id';

/**
 * The namespace id structure describes namespace id
 *
 * @since 1.0
 */
export class NamespaceId {

    /**
     * Namespace id
     */
    public readonly id: Id;

    /**
     * Namespace full name
     */
    public readonly fullName?: string;

    /**
     * Create NamespaceId from namespace string name (ex: nem or domain.subdom.subdome)
     * or id in form of array number (ex: [929036875, 2226345261])
     *
     * @param id
     */
    constructor(id: string | number[]) {
        if (id instanceof Array) {
            this.id = new Id(id);
        } else if (typeof id === 'string') {
            this.fullName = id;
            this.id = new Id(NamespaceIdGenerator(id));
        }
    }

    /**
     * Get string value of id
     * @returns {string}
     */
    public toHex(): string {
        return this.id.toHex();
    }

    /**
     * Compares namespaceIds for equality.
     *
     * @return boolean
     */
    public equals(id: any): boolean {
        if (id instanceof NamespaceId) {
            return this.id.equals(id.id);
        }
        return false;
    }
}
