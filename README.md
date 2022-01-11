# mahjong-kun

麻雀の点数計算君

```typescript
// tests/yakuAll.test.ts

type Case1 = YakuAll<["o2", "o3", "o4", "I6", "I7", "I8", "C4", "C5", "C6", "I6", "I7", "I8", "o4", "o4"], "o4">
type ExpectYaku1 = ExpectTrue<Equal<Case1, ["pinhu", "tanyao", "zero"]>>
type ExpectHanValue1 = ExpectTrue<Equal<HanValue<Case1>, 2>>

type Case2 = YakuAll<["o3", "o3", "o3", "I7", "I7", "I7", "C5", "C5", "C5", "I5", "I5", "I5", "o4", "o4"], "o4">
type ExpectYaku2 = ExpectTrue<Equal<Case2, ["zero", "tanyao", "toitoi"]>>
type ExpectHanValue2 = ExpectTrue<Equal<HanValue<Case2>, 3>>
```

TODO
- [] 門前、鳴き、ドラ判定
- [] 対応役の追加
- [] 符計算
- [] 親・子、ツモ・ロン上がり
- [] 合計点数の出力

Advanced TODO
- [] 手牌の整形
