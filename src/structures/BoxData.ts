interface BoxData {
    readonly profile: string;
    readonly name: string;
    readonly commentCount: number;
    readonly title: string;
    readonly contents: string;
    readonly tags: string[];
    readonly images: string[];
}

export default BoxData;
