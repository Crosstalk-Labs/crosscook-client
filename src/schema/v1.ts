import { openDB, DBSchema } from "idb";

type UserId = string;
type ImageRef = string;

export interface CrossCookSchemav1 extends DBSchema {
    users: {
        key: UserId,
        value: {
            name: string,
            img: ImageRef | null,
        },
    }
}
