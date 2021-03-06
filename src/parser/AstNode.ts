import { Location } from "../lexer";

/**
 * ABC (that's minimally compliant with ESLint/ESTree) for all nodes within
 * the AST generated by our parser.
 */
export abstract class AstNode {
    readonly type!: string;

    /** @param type should match the name of the derived class */
    constructor(type: string) {
        this.type = type;
    }

    /** Currently only used by ESLint for walking the tree */
    public parent: AstNode | undefined;

    /** Alias for location used by ESLint */
    public get loc() {
        return this.location;
    }
    public location!: Location;
}
