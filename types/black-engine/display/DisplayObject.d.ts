export class DisplayObject extends GameObject {
    protected mAlpha: number;
    protected mBlendMode: BlendMode;
    protected mVisible: boolean;
    protected mClipRect: Rectangle;
    protected mRenderer: Renderer | null;
    private mCacheAsBitmap;
    private mCacheAsBitmapDynamic;
    private mCacheAsBitmapDirty;
    private mCacheAsBitmapMatrixCache;
    private mCache;
    private mCacheBounds;
    protected mColor: number | null;
    protected mSnapToPixels: boolean;
    protected onRender(): void;
    getRenderer(): Renderer;
    onGetLocalBounds(outRect?: any): any;
    getBounds(space?: any, includeChildren?: boolean, outRect?: any): any;
    hitTest(localPoint: any): GameObject | DisplayObject;
    onHitTestMask(localPoint: any): boolean;
    set color(arg: number);
    get color(): number;
    set cacheAsBitmap(arg: boolean);
    get cacheAsBitmap(): boolean;
    set cacheAsBitmapDynamic(arg: boolean);
    get cacheAsBitmapDynamic(): boolean;
    set alpha(arg: number);
    get alpha(): number;
    set visible(arg: boolean);
    get visible(): boolean;
    set blendMode(arg: string);
    get blendMode(): string;
    set clipRect(arg: Rectangle);
    get clipRect(): Rectangle;
    set snapToPixels(arg: boolean);
    get snapToPixels(): boolean;
}
import { GameObject } from "../core/GameObject";
import { BlendMode } from "../drivers/BlendMode";
import { Renderer } from "../drivers/Renderer";
import { Rectangle } from "../geom/Rectangle";