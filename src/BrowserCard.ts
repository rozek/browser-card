/*******************************************************************************
*                                                                              *
*                              BrowserCards (BC)                               *
*                                                                              *
*******************************************************************************/

  const BC_Version = '0.0.37'

  declare const download:Function

  import {
//  throwError,      // will be redefined locally because of TypeScript compiler
  quoted, escaped, HTMLsafe,
    ValueIsBoolean,
    ValueIsNumber, ValueIsNumberInRange, ValueIsFiniteNumber,
      ValueIsInteger, ValueIsIntegerInRange, ValueIsOrdinal, ValueIsCardinal,
    ValueIsString, ValueIsStringMatching, ValueIsTextline, ValueIsText,
    ValueIsObject, ValueIsPlainObject,
    ValueIsArray, ValueIsList, ValueIsListSatisfying,
    ValueIsOneOf,
    ValueIsFunction,
    ValueIsColor, ValueIsEMailAddress, ValueIsURL,
  ValidatorForClassifier, acceptNil,rejectNil,
    expectBoolean,
    expectText,
    expectFunction,
  } from 'javascript-interface-library'

  const ValueIsPhoneNumber = ValueIsTextline // *C* should be implemented

  import { render, html }                                           from 'htm/preact'
  import { h, Fragment, createContext, toChildArray, cloneElement, createRef, createElement } from 'preact'
  import { createPortal, memo, forwardRef }                         from 'preact/compat'
  import { useId, useRef, useState, useReducer, useEffect, useLayoutEffect, useCallback, useMemo, useContext, useErrorBoundary } from 'preact/hooks'
  export {
    render, html,
    h, Fragment, createContext, toChildArray, cloneElement, createRef, createElement,
    createPortal, memo, forwardRef,
    useId, useRef, useState, useReducer, useEffect, useLayoutEffect, useCallback, useMemo, useContext, useErrorBoundary,
  }

/**** "Preact" bundles the most important preact exports for use in scripts ****/
/****  - so scripts never have to (and must not) re-import preact themselves  ****/

  const Preact = {
    h, Fragment, render, createContext, createElement, cloneElement, createRef,
    toChildArray, createPortal, memo, forwardRef,
    useId, useRef, useState, useReducer, useEffect, useLayoutEffect,
    useCallback, useMemo, useContext, useErrorBoundary,
  }
  export { Preact }
  export { BC_Version }
  export {
    quoted, escaped, HTMLsafe,
    ValueIsBoolean,
    ValueIsNumber, ValueIsNumberInRange, ValueIsFiniteNumber,
    ValueIsInteger, ValueIsIntegerInRange, ValueIsOrdinal, ValueIsCardinal,
    ValueIsString, ValueIsStringMatching, ValueIsTextline, ValueIsText,
    ValueIsObject, ValueIsPlainObject,
    ValueIsArray, ValueIsList, ValueIsListSatisfying,
    ValueIsOneOf,
    ValueIsFunction,
    ValueIsColor, ValueIsEMailAddress, ValueIsURL,
    ValidatorForClassifier, acceptNil, rejectNil,
    expectBoolean, expectText, expectFunction,
    ValueIsPhoneNumber,
  }

  import {
    createStore,
    get, set, del, clear,
    keys, values, entries,
  } from 'idb-keyval'
  export { createStore, get, set, del, clear, keys, values, entries }

  import Conversion from 'svelte-coordinate-conversion'
  const  { fromLocalTo, fromViewportTo, fromDocumentTo } = Conversion
  export { fromLocalTo, fromViewportTo, fromDocumentTo }

  import { MCPConnector, type BCMCPContext } from './MCPConnector.js'

/**** for MarkdownView ****/

  import { Marked }          from 'marked'
  import   markedKatex       from 'marked-katex-extension'
  import { markedHighlight } from 'marked-highlight'
  export { markedKatex, markedHighlight }
    import hljs from 'highlight.js/lib/core'

    import { default as _css }        from 'highlight.js/lib/languages/css'
      hljs.registerLanguage('css',_css)
    import { default as _javascript } from 'highlight.js/lib/languages/javascript'
      hljs.registerLanguage('javascript',_javascript)
    import { default as _java }       from 'highlight.js/lib/languages/java'
      hljs.registerLanguage('java',_java)
    import { default as _json }       from 'highlight.js/lib/languages/json'
      hljs.registerLanguage('json',_json)
    import { default as _typescript } from 'highlight.js/lib/languages/typescript'
      hljs.registerLanguage('typescript',_typescript)
    import { default as _xml }        from 'highlight.js/lib/languages/xml'
      hljs.registerLanguage('html',_xml)
      hljs.registerLanguage('xml', _xml)
  export { Marked }

/**** make some existing types indexable ****/

  export interface Indexable { [Key:string|number|symbol]:any }

/**** define serializable types ****/

  type serializableValue  = null | boolean | number | string |
                            serializableObject | serializableArray
  type serializableObject = { [Key:string]:serializableValue }
  type serializableArray  = serializableValue[]
  export type Serializable = serializableValue

/**** AssetsBase, IconFolder ****/

  const AssetsBase:BC_URL = '/' // 'https://rozek.github.io/browser-cards/'
  const IconFolder:BC_URL = AssetsBase + 'icons/'

//------------------------------------------------------------------------------
//--                             internal Symbols                             --
//------------------------------------------------------------------------------

  const $Target             = Symbol('Target')
  const $Script             = Symbol('Script')
  const $View               = Symbol('View')
  const $Descriptor         = Symbol('Descriptor')
  const $Behavior           = Symbol('Behavior')
  const $normalizedName     = Symbol('normalizedName')
  const $activeScript       = Symbol('activeScript')
  const $pendingScriptError = Symbol('pendingScriptError')
  const $OverlayList        = Symbol('OverlayList')
  const $DialogList         = Symbol('DialogList')
  const $ErrorReport        = Symbol('ErrorReport')
  const $rerender:           unique symbol = Symbol('rerender')
  const $Console:            unique symbol = Symbol('Console')
  const $Console_CharCount:  unique symbol = Symbol('Console_CharCount')
  const $Console_LineCount:  unique symbol = Symbol('Console_LineCount')

//------------------------------------------------------------------------------
//--                             Type Definitions                             --
//------------------------------------------------------------------------------

  export type BC_internalId   = string       // mainly for illustrative reasons
  export type BC_Identifier   = string                                  // dto.
  export type BC_Name         = string                                  // dto.
  export type BC_AttrName     = string                                  // dto.
  export type BC_Selector     = string                                  // dto.
  export type BC_Ordinal      = number                                  // dto.
  export type BC_Cardinal     = number                                  // dto.
  export type BC_Text         = string                                  // dto.
  export type BC_Textline     = string                                  // dto.
  export type BC_Color        = string                                  // dto.
  export type BC_EMailAddress = string                                  // dto.
  export type BC_PhoneNumber  = string                                  // dto.
  export type BC_URL          = string                                  // dto.

/**** geometry-related types ****/

  export type  BC_Location  = number
  export type  BC_Dimension = number

  export const BC_horizontalAnchorses = ['left-width','left-right','width-right']
  export type  BC_horizontalAnchors   = typeof BC_horizontalAnchorses[number]

  export const BC_verticalAnchorses = ['top-height','top-bottom','height-bottom']
  export type  BC_verticalAnchors   = typeof BC_verticalAnchorses[number]

  export type BC_Anchors = [BC_horizontalAnchors,BC_verticalAnchors]

  export type BC_horizontalOffsets = [ BC_Location|BC_Dimension, BC_Location|BC_Dimension ]
  export type BC_verticalOffsets   = [ BC_Location|BC_Dimension, BC_Location|BC_Dimension ]

  export type BC_Offsets = [
    BC_Location|BC_Dimension, BC_Location|BC_Dimension,
    BC_Location|BC_Dimension, BC_Location|BC_Dimension
  ]

  export type BC_Geometry = {
    x:BC_Location, y:BC_Location,
    Width:BC_Dimension, Height:BC_Dimension
  }

  type BC_incompleteGeometry = {
    x:BC_Location|null, y:BC_Location|null,
    Width:BC_Dimension|null, Height:BC_Dimension|null
  }

  type BC_incompleteAnchors = [BC_horizontalAnchors|null,BC_verticalAnchors|null]

  type BC_incompleteOffsets = [
    BC_Location|BC_Dimension|null, BC_Location|BC_Dimension|null,
    BC_Location|BC_Dimension|null, BC_Location|BC_Dimension|null
  ]

/**** descriptor-related types ****/

  export const BC_FontWeights = [
    'thin','extra-light','light','normal','medium','semi-bold',
    'bold','extra-bold','heavy'
  ]
  export type BC_FontWeight = typeof BC_FontWeights[number]

  export const BC_FontWeightValues = {
    'thin':100, 'extra-light':200, 'light':300, 'normal':400, 'medium':500,
    'semi-bold':600, 'bold':700, 'extra-bold':800, 'heavy':900
  }

  export const BC_FontStyles = ['normal','italic']
  export type  BC_FontStyle  = typeof BC_FontStyles[number]

  export const BC_TextDecorationLines = [ 'none','underline','overline','line-through' ]
  export type  BC_TextDecorationLine  = typeof BC_TextDecorationLines[number]

  export const BC_TextDecorationStyles = [ 'solid','double','dotted','dashed','wavy' ]
  export type  BC_TextDecorationStyle  = typeof BC_TextDecorationStyles[number]

  export type BC_TextDecoration = {
    isActive:  boolean,
    Line:      BC_TextDecorationLine,
    Color?:    BC_Color,           // "null" or "undefined" mean "currentColor"
    Style?:    BC_TextDecorationStyle,
    Thickness?:BC_Dimension           // "null" or "undefined" mean "from-font"
  }

  export type BC_TextShadow = {
    isActive:  boolean,
    xOffset:   BC_Location,
    yOffset:   BC_Location,
    BlurRadius:BC_Dimension,
    Color:     BC_Color                   // Color = "transparent" means "none"
  }

  export const BC_TextAlignments = [ 'left','center','right','justify' ]
  export type  BC_TextAlignment  = typeof BC_TextAlignments[number]

  export type BC_BackgroundTexture = {
    ImageURL:BC_URL,
    Mode:    BC_BackgroundMode,
    xOffset: BC_Location,
    yOffset: BC_Location
  }

  export const BC_BackgroundModes = [ 'normal','contain','cover','fill','tile' ]
  export type  BC_BackgroundMode  = typeof BC_BackgroundModes[number]

  export const BC_BorderStyles = [
    'none','hidden','dotted','dashed','solid','double','groove','ridge',
    'inset','outset'
  ]
  export type BC_BorderStyle = typeof BC_BorderStyles[number]

  export type BC_BoxShadow = {
    isActive:    boolean,
    xOffset:     BC_Location,
    yOffset:     BC_Location,
    BlurRadius:  BC_Dimension,
    SpreadRadius:BC_Dimension,
    Color:       BC_Color
  }

  export const BC_Cursors = [
    'auto','none','default','alias','all-scroll','cell','context-menu',
    'col-resize','copy','crosshair','e-resize','ew-resize','grab','grabbing',
    'help','move','n-resize','ne-resize','nesw-resize','ns-resize','nw-resize',
    'nwse-resize','no-drop','not-allowed','pointer','progress','row-resize',
    's-resize','se-resize','sw-resize','text','vertical-text','w-resize','wait',
    'zoom-in','zoom-out'
  ]
  export type BC_Cursor = typeof BC_Cursors[number]

  export const BC_Overflows = ['visible','hidden','scroll','auto']
  export type  BC_Overflow  = typeof BC_Overflows[number]

/**** common visual Properties ****/

  export type BC_visualProperties = {
    FontFamily?:BC_Textline, FontSize?:BC_Dimension, FontWeight?:BC_FontWeight,
      FontStyle?:BC_FontStyle,
    TextDecoration?:BC_TextDecoration, TextShadow?:BC_TextShadow,
      TextAlignment?:BC_TextAlignment,
    LineHeight?:BC_Dimension,
    ForegroundColor?:BC_Color,
    hasBackground?:boolean,
      BackgroundColor?:BC_Color, BackgroundTexture?:BC_BackgroundTexture,
    Opacity?:number,
    Cursor?:BC_Cursor,
  }

  export type BC_Script   = (PropSet:Indexable) => void
  export type BC_Renderer = (PropSet:Indexable) => any

/**** throwError - simplifies construction of named errors ****/

  export function throwError (Message:string):never {
debugger
    let Match = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(Message)
    if (Match == null) {
      throw new Error(Message)
    } else {
      let namedError = new Error(Match[2])
        namedError.name = Match[1]
      throw namedError
    }
  }

/**** throwReadOnlyError ****/

// @ts-ignore TS2534 why is TS complaining here?
  export function throwReadOnlyError (Name:string):never {
    throwError(
      'ReadOnlyProperty: property ' + quoted(Name) + ' must not be set'
    )
  }

//------------------------------------------------------------------------------
//--                 Classification and Validation Functions                  --
//------------------------------------------------------------------------------

/**** ValueIsIdentifier ****/

  const BC_IdentifierPattern = /^[a-z$_][a-z$_0-9]*$/i

  export function ValueIsIdentifier (Value:any):boolean {
    return ValueIsStringMatching(Value, BC_IdentifierPattern)
  }

/**** allow/expect[ed]Identifier ****/

  export const allowIdentifier = ValidatorForClassifier(
    ValueIsIdentifier, acceptNil, 'BC identifier'
  ), allowedIdentifier = allowIdentifier

  export const expectIdentifier = ValidatorForClassifier(
    ValueIsIdentifier, rejectNil, 'BC identifier'
  ), expectedIdentifier = expectIdentifier

/**** ValueIsName ****/

  export function ValueIsName (Value:any):boolean {
    return ValueIsString(Value) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(Value)
  }

/**** allow/expect[ed]Name ****/

  export const allowName = ValidatorForClassifier(
    ValueIsName, acceptNil, 'name'
  ), allowedName = allowName

  export const expectName = ValidatorForClassifier(
    ValueIsName, rejectNil, 'name'
  ), expectedName = expectName

/**** ValueIsLocation ****/

  export function ValueIsLocation (Value:any):boolean {
    return ValueIsFiniteNumber(Value)
  }

/**** allow/expect[ed]Location ****/

  export const allowLocation = ValidatorForClassifier(
    ValueIsLocation, acceptNil, 'BC coordinate'
  ), allowedLocation = allowLocation

  export const expectLocation = ValidatorForClassifier(
    ValueIsLocation, rejectNil, 'BC coordinate'
  ), expectedLocation = expectLocation

/**** ValueIsDimension ****/

  export function ValueIsDimension (Value:any):boolean {
    return ValueIsFiniteNumber(Value) && (Value >= 0)
  }

/**** allow/expect[ed]Dimension ****/

  export const allowDimension = ValidatorForClassifier(
    ValueIsDimension, acceptNil, 'BC dimension'
  ), allowedDimension = allowDimension

  export const expectDimension = ValidatorForClassifier(
    ValueIsDimension, rejectNil, 'BC dimension'
  ), expectedDimension = expectDimension

/**** ValueIsPosition ****/

  export function ValueIsPosition (Value:any):boolean {
    return ValueIsPlainObject(Value) && (
      ValueIsLocation(Value.x) && ValueIsLocation(Value.y)
    )
  }

/**** allow/expect[ed]Position ****/

  export const allowPosition = ValidatorForClassifier(
    ValueIsPosition, acceptNil, 'BC position'
  ), allowedPosition = allowPosition

  export const expectPosition = ValidatorForClassifier(
    ValueIsPosition, rejectNil, 'BC position'
  ), expectedPosition = expectPosition

/**** ValueIsSize ****/

  export function ValueIsSize (Value:any):boolean {
    return ValueIsPlainObject(Value) && (
      ValueIsDimension(Value.Width) && ValueIsDimension(Value.Height)
    )
  }

/**** allow/expect[ed]Size ****/

  export const allowSize = ValidatorForClassifier(
    ValueIsSize, acceptNil, 'BC size'
  ), allowedSize = allowSize

  export const expectSize = ValidatorForClassifier(
    ValueIsSize, rejectNil, 'BC size'
  ), expectedSize = expectSize

/**** ValueIsGeometry ****/

  export function ValueIsGeometry (Value:any):boolean {
    return ValueIsPlainObject(Value) && (
      ValueIsLocation(Value.x) && ValueIsDimension(Value.Width) &&
      ValueIsLocation(Value.y) && ValueIsDimension(Value.Height)
    )
  }

/**** allow/expect[ed]Geometry ****/

  export const allowGeometry = ValidatorForClassifier(
    ValueIsGeometry, acceptNil, 'BC geometry'
  ), allowedGeometry = allowGeometry

  export const expectGeometry = ValidatorForClassifier(
    ValueIsGeometry, rejectNil, 'BC geometry'
  ), expectedGeometry = expectGeometry

/**** ValueIsIncompleteGeometry ****/

  function ValueIsIncompleteGeometry (Value:any):boolean {
    if (! ValueIsPlainObject(Value)) { return false }

    for (let Key in Value) {
      if (Value.hasOwnProperty(Key)) {
        switch (Key) {
          case 'x': case 'y':
            if ((Value[Key] != null) && ! ValueIsLocation(Value[Key])) {
              return false
            }
            break
          case 'Width': case 'Height':
            if ((Value[Key] != null) && ! ValueIsDimension(Value[Key])) {
              return false
            }
            break
          default:
            return false
        }
      }
    }

    return true
  }

/**** allow/expect[ed]IncompleteGeometry ****/

  const allowIncompleteGeometry = ValidatorForClassifier(
    ValueIsIncompleteGeometry, acceptNil, 'BC geometry'
  ), allowedIncompleteGeometry = allowIncompleteGeometry

  const expectIncompleteGeometry = ValidatorForClassifier(
    ValueIsIncompleteGeometry, rejectNil, 'BC geometry'
  ), expectedIncompleteGeometry = expectIncompleteGeometry

/**** ValueIsAnchors ****/

  export function ValueIsAnchors (Value:any):boolean {
    return (
      ValueIsList(Value) && (Value.length === 2) &&
      ValueIsOneOf(Value[0],BC_horizontalAnchorses) &&
      ValueIsOneOf(Value[1],BC_verticalAnchorses)
    )
  }

/**** allow/expect[ed]Anchors ****/

  export const allowAnchors = ValidatorForClassifier(
    ValueIsAnchors, acceptNil, 'BC anchors list'
  ), allowedAnchors = allowAnchors

  export const expectAnchors = ValidatorForClassifier(
    ValueIsAnchors, rejectNil, 'BC anchors list'
  ), expectedAnchors = expectAnchors

/**** ValueIsOffsets ****/

  export function ValueIsOffsets (Value:any):boolean {
    return (
      ValueIsListSatisfying(Value,ValueIsFiniteNumber) && (Value.length === 4)
    )
  }

/**** allow/expect[ed]Offsets ****/

  export const allowOffsets = ValidatorForClassifier(
    ValueIsOffsets, acceptNil, 'BC offsets list'
  ), allowedOffsets = allowOffsets

  export const expectOffsets = ValidatorForClassifier(
    ValueIsOffsets, rejectNil, 'BC offsets list'
  ), expectedOffsets = expectOffsets

/**** ValueIsTextDecoration ****/

  export function ValueIsTextDecoration (Value:any):boolean {
    return (Value === 'none') || (
      ValueIsObject(Value) &&
      ValueIsBoolean(Value.isActive) &&
      ValueIsOneOf(Value.Line, BC_TextDecorationLines) &&
      ((Value.Color == null) || ValueIsColor(Value.Color)) &&
      ((Value.Style == null) || ValueIsOneOf(Value.Style,BC_TextDecorationStyles)) &&
      ((Value.Thickness == null) || ValueIsDimension(Value.Thickness))
    )
  }

/**** allow/expect[ed]TextDecoration ****/

  export const allowTextDecoration = ValidatorForClassifier(
    ValueIsTextDecoration, acceptNil, 'text decoration'
  ), allowedTextDecoration = allowTextDecoration

  export const expectTextDecoration = ValidatorForClassifier(
    ValueIsTextDecoration, rejectNil, 'text decoration'
  ), expectedTextDecoration = expectTextDecoration

/**** ValueIsTextShadow ****/

  export function ValueIsTextShadow (Value:any):boolean {
    return (Value === 'none') || (
      ValueIsObject(Value) &&
      ValueIsBoolean(Value.isActive) &&
      ValueIsLocation(Value.xOffset) && ValueIsLocation(Value.yOffset) &&
      ValueIsDimension(Value.BlurRadius) && ValueIsColor(Value.Color)
    )
  }

/**** allow/expect[ed]TextShadow ****/

  export const allowTextShadow = ValidatorForClassifier(
    ValueIsTextShadow, acceptNil, 'text shadow specification'
  ), allowedTextShadow = allowTextShadow

  export const expectTextShadow = ValidatorForClassifier(
    ValueIsTextShadow, rejectNil, 'text shadow specification'
  ), expectedTextShadow = expectTextShadow

/**** ValueIsBackgroundTexture ****/

  export function ValueIsBackgroundTexture (Value:any):boolean {
    return (Value === 'none') || (
      ValueIsObject(Value) &&
      ValueIsBoolean(Value.isActive) &&
      ValueIsURL(Value.ImageURL) &&
      ValueIsOneOf(Value.Mode, BC_BackgroundModes) &&
      ValueIsLocation(Value.xOffset) && ValueIsLocation(Value.yOffset)
    )
  }

/**** allow/expect[ed]BackgroundTexture ****/

  export const allowBackgroundTexture = ValidatorForClassifier(
    ValueIsBackgroundTexture, acceptNil, 'background texture'
  ), allowedBackgroundTexture = allowBackgroundTexture

  export const expectBackgroundTexture = ValidatorForClassifier(
    ValueIsBackgroundTexture, rejectNil, 'background texture'
  ), expectedBackgroundTexture = expectBackgroundTexture

/**** ValueIsBorderStyle ****/

  export function ValueIsBorderStyle (Value:any):boolean {
    return ValueIsOneOf(Value,BC_BorderStyles)
  }

/**** allow/expect[ed]BorderStyle ****/

  export const allowBorderStyle = ValidatorForClassifier(
    ValueIsBorderStyle, acceptNil, 'widget border style'
  ), allowedBorderStyle = allowBorderStyle

  export const expectBorderStyle = ValidatorForClassifier(
    ValueIsBorderStyle, rejectNil, 'widget border style'
  ), expectedBorderStyle = expectBorderStyle

/**** ValueIsBoxShadow ****/

  export function ValueIsBoxShadow (Value:any):boolean {
    return (Value === 'none') || (
      ValueIsObject(Value) &&
      ValueIsBoolean(Value.isActive) &&
      ValueIsLocation(Value.xOffset) && ValueIsLocation(Value.yOffset) &&
      ValueIsDimension(Value.BlurRadius) && ValueIsDimension(Value.SpreadRadius) &&
      ValueIsColor(Value.Color)
    )
  }

/**** allow/expect[ed]BoxShadow ****/

  export const allowBoxShadow = ValidatorForClassifier(
    ValueIsBoxShadow, acceptNil, 'widget box shadow specification'
  ), allowedBoxShadow = allowBoxShadow

  export const expectBoxShadow = ValidatorForClassifier(
    ValueIsBoxShadow, rejectNil, 'widget box shadow specification'
  ), expectedBoxShadow = expectBoxShadow

/**** ValueIsOverflowList ****/

  export function ValueIsOverflowList (Value:any):boolean {
    return ValueIsListSatisfying(
      Value,(Value:any) => ValueIsOneOf(Value,BC_Overflows),2,2
    )
  }

/**** allow/expect[ed]OverflowList ****/

  export const allowOverflowList = ValidatorForClassifier(
    ValueIsOverflowList, acceptNil, 'BC overflow list'
  ), allowedOverflowList = allowOverflowList

  export const expectOverflowList = ValidatorForClassifier(
    ValueIsOverflowList, rejectNil, 'BC overflow list'
  ), expectedOverflowList = expectOverflowList

/**** ValueIsSerializableValue ****/

  export function ValueIsSerializableValue (Value:any):boolean {
    switch (true) {
      case (Value == null):                // deliberately also allows undefined
      case ValueIsBoolean(Value):
      case ValueIsNumber(Value):
      case ValueIsString(Value):
      case ValueIsListSatisfying(Value,ValueIsSerializableValue):
        return true
      case ValueIsPlainObject(Value): // *C* check for recursion
        for (let Property in Value) {
          if (
            Value.hasOwnProperty(Property) &&
            ! ValueIsSerializableValue(Value[Property])
          ) { return false }
        }
        return true
    }
    return false
  }

/**** allow/expect[ed]SerializableValue ****/

  export const allowSerializableValue = ValidatorForClassifier(
    ValueIsSerializableValue, acceptNil, 'serializable value'
  ), allowedSerializableValue = allowSerializableValue

  export const expectSerializableValue = ValidatorForClassifier(
    ValueIsSerializableValue, rejectNil, 'serializable value'
  ), expectedSerializableValue = expectSerializableValue

/**** ValueIsSerializableObject ****/

  export function ValueIsSerializableObject (Value:any):boolean {
    if (ValueIsPlainObject(Value)) {
      for (let Property in Value) {
        if (
          Value.hasOwnProperty(Property) &&
          ! ValueIsSerializableValue(Value[Property])
        ) { return false }
      }
      return true
    } else {
      return false
    }
  }

/**** allow/expect[ed]SerializableObject ****/

  export const allowSerializableObject = ValidatorForClassifier(
    ValueIsSerializableObject, acceptNil, 'serializable object'
  ), allowedSerializableObject = allowSerializableObject

  export const expectSerializableObject = ValidatorForClassifier(
    ValueIsSerializableObject, rejectNil, 'serializable object'
  ), expectedSerializableObject = expectSerializableObject

/**** ValueIsLineList ****/

  export function ValueIsLineList (Value:any, Pattern:RegExp|undefined):boolean {
    const Validator = (
      Pattern == null
      ? ValueIsTextline
      : (Value:any) => ValueIsStringMatching(Value,Pattern)
    )
    return ValueIsListSatisfying(Value,Validator)
  }

/**** allow/expect[ed]LineList ****/

  export function allowLineList (
    Description:string, Argument:any, Pattern:RegExp|undefined
  ):BC_Textline[]|null|undefined {
    return (Argument == null
      ? Argument
      : expectedLineList(Description, Argument, Pattern)
    )
  }
  export const allowedLineList = allowLineList

  export function expectLineList (
    Description:string, Argument:any, Pattern:RegExp|undefined
  ):BC_Textline[] {
    if (Argument == null) {
      throwError(`MissingArgument: no ${escaped(Description)} given`)
    } else {
      const Validator = (
        Pattern == null
        ? ValueIsTextline
        : (Value:any) => ValueIsStringMatching(Value,Pattern)
      )
      if (ValueIsListSatisfying(Argument,Validator)) {
        return Argument
      } else {
        throwError(`InvalidArgument: the given value is no ${escaped(Description)}`)
      }
    }
  }
  export const expectedLineList = expectLineList

/**** ValueIsNumberList ****/

  export function ValueIsNumberList (
    Value:any, minValue?:number, maxValue?:number, withMin?:boolean, withMax?:boolean
  ):boolean {
    const Validator = (
      (minValue == null) && (maxValue == null)
      ? ValueIsNumber
      : (Value:any) => ValueIsNumberInRange(Value, minValue,maxValue, withMin,withMax)
    )
    return ValueIsListSatisfying(Value,Validator)
  }

/**** allow/expect[ed]NumberList ****/

  export function allowNumberList (
    Description:string, Argument:any,
    minValue?:number, maxValue?:number, withMin?:boolean, withMax?:boolean
  ):number[]|null|undefined {
    return (Argument == null
      ? Argument
      : expectedNumberList(Description, Argument, minValue,maxValue, withMin,withMax)
    )
  }
  export const allowedNumberList = allowNumberList

  export function expectNumberList (
    Description:string, Argument:any,
    minValue?:number, maxValue?:number, withMin?:boolean, withMax?:boolean
  ):number[] {
    if (Argument == null) {
      throwError(`MissingArgument: no ${escaped(Description)} given`)
    } else {
      const Validator = (
        (minValue == null) && (maxValue == null)
        ? ValueIsNumber
        : (Value:any) => ValueIsNumberInRange(Value, minValue,maxValue, withMin,withMax)
      )
      if (ValueIsListSatisfying(Argument,Validator)) {
        return Argument
      } else {
        throwError(`InvalidArgument: the given value is no ${escaped(Description)}`)
      }
    }
  }
  export const expectedNumberList = expectNumberList

/**** ValueIsIntegerList ****/

  export function ValueIsIntegerList (
    Value:any, minValue?:number, maxValue?:number
  ):boolean {
    const Validator = (
      (minValue == null) && (maxValue == null)
      ? ValueIsInteger
      : (Value:any) => ValueIsIntegerInRange(Value, minValue,maxValue)
    )
    return ValueIsListSatisfying(Value,Validator)
  }

/**** allow/expect[ed]IntegerList ****/

  export function allowIntegerList (
    Description:string, Argument:any, minValue?:number, maxValue?:number
  ):number[]|null|undefined {
    return (Argument == null
      ? Argument
      : expectedIntegerList(Description, Argument, minValue,maxValue)
    )
  }
  export const allowedIntegerList = allowIntegerList

  export function expectIntegerList (
    Description:string, Argument:any,
    minValue?:number, maxValue?:number
  ):number[] {
    if (Argument == null) {
      throwError(`MissingArgument: no ${escaped(Description)} given`)
    } else {
      const Validator = (
        (minValue == null) && (maxValue == null)
        ? ValueIsInteger
        : (Value:any) => ValueIsIntegerInRange(Value, minValue,maxValue)
      )
      if (ValueIsListSatisfying(Argument,Validator)) {
        return Argument
      } else {
        throwError(`InvalidArgument: the given value is no ${escaped(Description)}`)
      }
    }
  }
  export const expectedIntegerList = expectIntegerList

//------------------------------------------------------------------------------
//--                               Acceptables                                --
//------------------------------------------------------------------------------

/**** acceptableValue ****/

  export function acceptableValue (Value:any, Validator:Function):any|undefined {
    expectFunction('Validator',Validator)

    if (Validator(Value) === true) {
      return Value
    } else {
      return undefined
    }
  }

/**** acceptableBoolean ****/

  export function acceptableBoolean (Value:any):boolean|undefined {
    switch (true) {
      case ValueIsBoolean(Value): return Value as boolean
      case (Value === 'false'):   return false
      case (Value === 'true'):    return true
    }
  }

/**** acceptableNumber ****/

  export function acceptableNumber (Value:any):number|undefined {
    if (ValueIsNumber(Value)) { return Value as number }

    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (! isNaN(Value)) { return Value as number }
    }
  }

/**** acceptableNumberInRange ****/

  export function acceptableNumberInRange (
    Value:any, Minimum?:number, Maximum?:number,
    withMinimum?:boolean, withMaximum?:boolean
  ):number|undefined {
    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (isNaN(Value)) { return undefined }
    }

    if (ValueIsNumberInRange(Value,Minimum,Maximum,withMinimum,withMaximum)) {
      return Value as number
    }
  }

/**** acceptableInteger ****/

  export function acceptableInteger (Value:any):number|undefined {
    if (ValueIsInteger(Value)) { return Value as number }

    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (ValueIsInteger(Value)) { return Value as number }
    }
  }

/**** acceptableIntegerInRange ****/

  export function acceptableIntegerInRange (
    Value:any, Minimum?:number, Maximum?:number
  ):number|undefined {
    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (! ValueIsNumber(Value)) { return undefined }
    }

    if (ValueIsIntegerInRange(Value,Minimum,Maximum)) {
      return Value as number
    }
  }

/**** acceptableOrdinal ****/

  export function acceptableOrdinal (Value:any):BC_Ordinal|undefined {
    if (ValueIsOrdinal(Value)) { return Value as number }

    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (ValueIsOrdinal(Value)) { return Value as number }
    }
  }

/**** acceptableCardinal ****/

  export function acceptableCardinal (Value:any):BC_Cardinal|undefined {
    if (ValueIsCardinal(Value)) { return Value as number }

    if (ValueIsString(Value)) {
      Value = parseFloat(Value as string)
      if (ValueIsCardinal(Value)) { return Value as number }
    }
  }

/**** acceptableString ****/

  export function acceptableString (Value:any):string|undefined {
    if (ValueIsString(Value)) { return Value as string }
  }

/**** acceptableStringMatching ****/

  export function acceptableStringMatching (Value:any, Pattern:RegExp):string|undefined {
    if (ValueIsStringMatching(Value, Pattern)) { return Value as string }
  }

/**** acceptableText ****/

  export function acceptableText (Value:any):BC_Text|undefined {
    if (ValueIsText(Value)) { return Value as string }
  }

/**** acceptableTextline ****/

  export function acceptableTextline (Value:any):BC_Textline|undefined {
    if (ValueIsTextline(Value)) { return Value as string }
  }

/**** acceptableFunction ****/

  export function acceptableFunction (Value:any):Function|undefined {
    if (ValueIsFunction(Value)) { return Value as Function }
  }

/**** acceptableColor ****/

  export function acceptableColor (Value:any):BC_Color|undefined {
    if (ValueIsColor(Value)) { return Value as BC_Color }
  }

/**** acceptableEMailAddress ****/

  export function acceptableEMailAddress (Value:any):BC_EMailAddress|undefined {
    if (ValueIsEMailAddress(Value)) { return Value as BC_EMailAddress }
  }

/**** acceptablePhoneNumber ****/

  export function acceptablePhoneNumber (Value:any):BC_PhoneNumber|undefined {
    if (ValueIsPhoneNumber(Value)) { return Value as BC_PhoneNumber }
  }

/**** acceptableURL ****/

  export function acceptableURL (Value:any):BC_URL|undefined {
    if (ValueIsURL(Value)) { return Value as BC_URL }
  }

/**** acceptableName ****/

  export function acceptableName (Value:any):BC_Name|undefined {
    if (ValueIsName(Value)) { return Value as BC_Name }
  }

/**** acceptableNameOrIndex ****/

  export function acceptableNameOrIndex (Value:any):BC_Name|BC_Ordinal|undefined {
    if (ValueIsName(Value) || ValueIsOrdinal(Value)) { return Value as BC_Name|BC_Ordinal }
  }

//------------------------------------------------------------------------------
//--                            internalId Support                            --
//------------------------------------------------------------------------------

/**** newInternalId ****/

  let IdCounter:number = 0

  export function newInternalId (Type:'deck'|'background'|'card'|'widget'):string {
    IdCounter += 1
    return `bc-${Type}-${IdCounter}`
  }

//------------------------------------------------------------------------------
//--                              Normalizations                              --
//------------------------------------------------------------------------------

/**** normalizedName ****/

  export function normalizedName (Name:BC_Name):BC_Name {
    expectName('name',Name)
    return _normalizedName(Name)                                          // DRY
  }

/**** _normalizedName — replaces dots with hyphens for use in CSS ids ****/

  function _normalizedName (Name:BC_Name):string {
    return Name.replaceAll('.', '-')
  }

/**** installStylesheetFor ****/

  export function installStylesheetFor (
    Name:BC_Name, Stylesheet:BC_Text, overwrite:boolean = false
  ):void {
    expectName('stylesheet name',Name)
    expectText     ('stylesheet',Stylesheet)
    expectBoolean   ('mode flag',overwrite)

    const StylesheetId = 'BC-Stylesheet-for-' + _normalizedName(Name)

    let StyleElement = document.head.querySelector('style[id="' + StylesheetId + '"]')
    if (StyleElement == null) {
      StyleElement = document.createElement('style')
        StyleElement.id          = StylesheetId
        StyleElement.textContent = Stylesheet
      document.head.append(StyleElement)
    } else {
      if (overwrite) {
        StyleElement.textContent = Stylesheet
      } else {
        console.warn('multiple definitions for stylesheet "' + Name + '"')
      }
    }
  }

//------------------------------------------------------------------------------
//--                          Calendar Input Support                          --
//------------------------------------------------------------------------------

/**** for TimeInput ****/

  export const BC_TimePattern = '\\d{2}:\\d{2}'
  export const BC_TimeRegExp  = /\d{2}:\d{2}/

  export function ValueIsTime (Value:any):boolean {
    return ValueIsStringMatching(Value,BC_TimeRegExp)
  }

/**** for DateTimeInput ****/

  export const BC_DateTimePattern = '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}'
  export const BC_DateTimeRegExp  = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/

  export function ValueIsDateTime (Value:any):boolean {
    return ValueIsStringMatching(Value,BC_DateTimeRegExp)
  }

/**** for DateInput ****/

  export const BC_DatePattern = '\\d{4}-\\d{2}-\\d{2}'
  export const BC_DateRegExp  = /\d{4}-\d{2}-\d{2}/

  export function ValueIsDate (Value:any):boolean {
    return ValueIsStringMatching(Value,BC_DateRegExp)
  }

/**** for WeekInput ****/

  export const BC_WeekPattern = '\\d{4}-W\\d{2}'
  export const BC_WeekRegExp  = /\d{4}-W\d{2}/

  export function ValueIsWeek (Value:any):boolean {
    return ValueIsStringMatching(Value,BC_WeekRegExp)
  }

/**** for MonthInput ****/

  export const BC_MonthPattern = '\\d{4}-\\d{2}'
  export const BC_MonthRegExp  = /\d{4}-\d{2}/

  export function ValueIsMonth (Value:any):boolean {
    return ValueIsStringMatching(Value,BC_MonthRegExp)
  }

//------------------------------------------------------------------------------
//--                      configurable Property Support                       --
//------------------------------------------------------------------------------

  export const BC_PropertyEditorTypes = [
    'checkbox', 'choice',
    'textline-input', 'password-input', 'number-input', 'integer-input', 'search-input',
    'phone-number-input', 'email-address-input', 'url-input',
    'time-input', 'date-time-input', 'date-input', 'week-input', 'month-input',
    'color-input', 'drop-down', 'slider',
    'text-input', 'html-input', 'css-input', 'javascript-input', 'json-input',
    'linelist-input', 'numberlist-input'
  ]
  export type BC_PropertyEditorType = typeof BC_PropertyEditorTypes[number]

  export type BC_PropertyDescriptor = {
    Name:BC_Identifier, Label?:BC_Textline,
    EditorType:BC_PropertyEditorType, readonly?:boolean,
    Validator:(Value:any) => void,
    Getter:   (Visual:BC_Proxy) => any,
    Setter:   (Visual:BC_Proxy, Value:any) => void,
  } & {                              // plus additional editor-specific elements
    Placeholder?:BC_Textline,
    FalseValue?:BC_Textline, TrueValue?:BC_Textline,
    minLength?:number, maxLength?:number,
    multiple?:boolean, Pattern?:BC_Textline,
    minValue?:any, maxValue?:any, Stepping?:'any'|number,
    Resizability?:'none'|'horizontal'|'vertical'|'both',
    LineWrapping?:boolean, SpellChecking?:boolean,
    Hashmarks?:any[], Suggestions?:string[], ValueList?:any[]
  }
  export type BC_PropertyDescriptorList = BC_PropertyDescriptor[]

/**** the following names must not be used for custom properties ****/

  const forbiddenPropertyNames = Object.create(null)
  ;`
    Deck Card Widget
    Name isFixed isPermanent isHidden isDisabled
    x y Width Height Anchors Offsets minWidth minHeight maxWidth maxHeight
    SnapToGrid GridWidth GridHeight
    FontFamily FontSize FontWeight FontStyle
    TextDecoration TextShadow TextAlignment LineHeight
    ForegroundColor hasBackground BackgroundColor BackgroundTexture
    BorderWidths BorderStyles BorderColors BorderRadii
    BoxShadow
    Opacity Cursor Overflows
    pendingScript Script
    CardList activeCard WidgetList
  `.trim().replace(/\s+/g,' ').split(' ').forEach(
    (PropertyName:BC_Identifier) => forbiddenPropertyNames[PropertyName] = true
  )

/**** ValueIsPropertyDescriptor ****/

  function ValueIsPropertyDescriptor (Value:any):boolean {
    if (
      ! ValueIsPlainObject(Value) ||
      ! ValueIsIdentifier(Value.Name) ||
      (Value.Name in forbiddenPropertyNames) ||
      (Value.Label != null) && ! ValueIsTextline(Value.Label) ||
      (Value.EditorType == null) ||
        ! ValueIsOneOf(Value.EditorType,BC_PropertyEditorTypes) ||
        (Value.readonly != null) && ! ValueIsBoolean(Value.readonly) ||
      ! ValueIsFunction(Value.Validator) ||
        ! ValueIsFunction(Value.Getter) || ! ValueIsFunction(Value.Setter)
    ) { return false }

  /**** validate editor-specific settings ****/

    const {
      EditorType,
      Placeholder, FalseValue,TrueValue, minLength,maxLength,multiple,Pattern,
      minValue,maxValue,Stepping, Resizability,LineWrapping,
      SpellChecking, ValueList, Hashmarks, Suggestions
    } = Value

    switch (EditorType) {
      case 'checkbox':
        break
      case 'choice':                         // drop-down for boolean properties
        if (! ValueIsTextline(FalseValue) || ! ValueIsTextline(TrueValue)) {
          return false
        }
        break
      case 'textline-input':
      case 'password-input':
      case 'email-address-input':
      case 'phone-number-input':
      case 'url-input':
      case 'search-input':
        if (
          (Placeholder   != null) && ! ValueIsTextline(Placeholder) ||
          (minLength     != null) && ! ValueIsOrdinal(minLength) ||
          (maxLength     != null) && ! ValueIsOrdinal(maxLength) ||
          (multiple      != null) && ! ValueIsBoolean(multiple) && (EditorType === 'email-address-input') ||
          (SpellChecking != null) && ! ValueIsBoolean(SpellChecking) && (EditorType === 'textline-input') ||
          (Pattern       != null) && ! ValueIsTextline(Pattern) ||
          (Suggestions   != null) && ! ValueIsListSatisfying(Suggestions,ValueIsTextline)
        ) { return false }
        break
      case 'number-input':
      case 'integer-input':
        if (
          (Placeholder != null) && ! ValueIsTextline(Placeholder)  ||
          (minValue    != null) && ! ValueIsFiniteNumber(minValue) ||
          (maxValue    != null) && ! ValueIsFiniteNumber(maxValue) ||
          (Stepping    != null) && ! ValueIsNumberInRange(Stepping, 0,Infinity, false) && (Stepping !== 'any') ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsFiniteNumber)
        ) { return false }
        break
      case 'time-input':
        if (
          (minValue    != null) && ! ValueIsTime(minValue) ||
          (maxValue    != null) && ! ValueIsTime(maxValue) ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsTime)
        ) { return false }
        break
      case 'date-time-input':
        if (
          (minValue    != null) && ! ValueIsDateTime(minValue) ||
          (maxValue    != null) && ! ValueIsDateTime(maxValue) ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsDateTime)
        ) { return false }
        break
      case 'date-input':
        if (
          (minValue    != null) && ! ValueIsDate(minValue) ||
          (maxValue    != null) && ! ValueIsDate(maxValue) ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsDate)
        ) { return false }
        break
      case 'week-input':
        if (
          (minValue    != null) && ! ValueIsWeek(minValue) ||
          (maxValue    != null) && ! ValueIsWeek(maxValue) ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsWeek)
        ) { return false }
        break
      case 'month-input':
        if (
          (minValue    != null) && ! ValueIsMonth(minValue) ||
          (maxValue    != null) && ! ValueIsMonth(maxValue) ||
          (Suggestions != null) && ! ValueIsListSatisfying(Suggestions,ValueIsMonth)
        ) { return false }
        break
      case 'color-input':
        break
      case 'drop-down':
        if (! ValueIsListSatisfying(ValueList,ValueIsTextline)) {
          return false
        }
        break
      case 'slider':
        if (
          (minValue  != null) && ! ValueIsFiniteNumber(minValue) ||
          (maxValue  != null) && ! ValueIsFiniteNumber(maxValue) ||
          (Stepping  != null) && ! ValueIsNumberInRange(Stepping, 0,Infinity, false) && (Stepping !== 'any') ||
          (Hashmarks != null) && ! ValueIsListSatisfying(Hashmarks,ValueIsTextline) // *C* could be better
        ) { return false }
        break
      case 'text-input':
        if (
          (Placeholder   != null) && ! ValueIsTextline(Placeholder) ||
          (minLength     != null) && ! ValueIsOrdinal(minLength) ||
          (maxLength     != null) && ! ValueIsOrdinal(maxLength) ||
          (SpellChecking != null) && ! ValueIsBoolean(SpellChecking) ||
          (Resizability  != null) && ! ValueIsOneOf(Resizability,['none','horizontal','vertical','both']) ||
          (LineWrapping  != null) && ! ValueIsBoolean(LineWrapping)
        ) { return false }
        break
      case 'html-input':
      case 'css-input':
      case 'javascript-input':
      case 'json-input':
      case 'linelist-input':
      case 'numberlist-input':
      case 'integerlist-input':
        if (
          (Placeholder   != null) && ! ValueIsTextline(Placeholder) ||
          (minLength     != null) && ! ValueIsOrdinal(minLength) ||
          (maxLength     != null) && ! ValueIsOrdinal(maxLength) ||
          (Resizability  != null) && ! ValueIsOneOf(Resizability,['none','horizontal','vertical','both']) ||
          (LineWrapping  != null) && ! ValueIsBoolean(LineWrapping)
        ) { return false }
        break
    }

    return true
  }

/**** validatePropertyDescriptors ****/

  function validatePropertyDescriptors (Value:any, ErrorReporter?:Function):void {
    if (! ValueIsList(Value)) {
      if (ErrorReporter != null) {
        ErrorReporter('PropertyDescriptors')
      } else {
        throwError(
          'InvalidArgument: the given list of property descriptors is no ' +
          'valid list'
        )
      }
    }

    ;(Value as any[]).forEach((Value:any, i:number) => {
      if (! ValueIsPropertyDescriptor(Value)) {
        if (ErrorReporter != null) {
          ErrorReporter('PropertyDescriptor #' + (i+1))
        } else {
          throwError(
            'InvalidArgument: PropertyDescriptor #' + (i+1) + ' is invalid'
          )
        }
      }
    })
  }

/**** normalizedPropertyDescriptor ****/

  function normalizedPropertyDescriptor (Value:any):BC_PropertyDescriptor {
    if (! ValueIsPropertyDescriptor(Value)) throwError(
      `InvalidArgument: invalid descriptor for property ${Value.Name == null ? '' : quoted(''+Value.Name)}`
    )

    let {
      Name, Label, EditorType, readonly, Validator, Getter, Setter,
      Placeholder, FalseValue,TrueValue, minLength,maxLength,multiple,Pattern,
      minValue,maxValue, withMin:_withMin,withMax:_withMax, Stepping, Resizability,LineWrapping,
      SpellChecking, ValueList, Hashmarks, Suggestions
    } = Value

    if (Label == null) { Label = Name }

    let Descriptor:BC_PropertyDescriptor = {
      Name, Label, EditorType,
      Validator, Getter, Setter
    }
      if (readonly != null) { Descriptor.readonly = readonly }

      switch (Value.EditorType) {
        case 'checkbox':
          break
        case 'choice':                       // drop-down for boolean properties
          Descriptor.FalseValue = FalseValue
          Descriptor.TrueValue  = TrueValue
          break
        case 'textline-input':
        case 'password-input':
        case 'email-address-input':
        case 'phone-number-input':
        case 'url-input':
        case 'search-input':
          if (Placeholder   != null) { Descriptor.Placeholder   = Placeholder }
          if (minLength     != null) { Descriptor.minLength     = minLength }
          if (maxLength     != null) { Descriptor.maxLength     = maxLength }
          if (multiple      != null) { Descriptor.multiple      = multiple }
          if (SpellChecking != null) { Descriptor.SpellChecking = SpellChecking }
          if (Pattern       != null) { Descriptor.Pattern       = Pattern }
          if (Suggestions   != null) { Descriptor.Suggestions   = Suggestions.slice() }
          break
        case 'number-input':
        case 'integer-input':
          if (Placeholder != null) { Descriptor.Placeholder = Placeholder }
          if (minValue    != null) { Descriptor.minValue    = minValue }
          if (maxValue    != null) { Descriptor.maxValue    = maxValue }
          if (Stepping    != null) { Descriptor.Stepping    = Stepping }
          if (Suggestions != null) { Descriptor.Suggestions = Suggestions.slice() }
          break
        case 'time-input':
        case 'date-time-input':
        case 'date-input':
        case 'month-input':
        case 'week-input':
          if (minValue    != null) { Descriptor.minValue    = minValue }
          if (maxValue    != null) { Descriptor.maxValue    = maxValue }
          if (Suggestions != null) { Descriptor.Suggestions = Suggestions.slice() }
          break
        case 'color-input':
          break
        case 'drop-down':
          Descriptor.ValueList = ValueList
          break
        case 'slider':
          if (minValue  != null) { Descriptor.minValue  = minValue }
          if (maxValue  != null) { Descriptor.maxValue  = maxValue }
          if (Stepping  != null) { Descriptor.Stepping  = Stepping }
          if (Hashmarks != null) { Descriptor.Hashmarks = Hashmarks.slice() }
          break
        case 'text-input':
          if (Placeholder   != null) { Descriptor.Placeholder   = Placeholder }
          if (minLength     != null) { Descriptor.minLength     = minLength }
          if (maxLength     != null) { Descriptor.maxLength     = maxLength }
          if (SpellChecking != null) { Descriptor.SpellChecking = SpellChecking }
          if (Resizability  != null) { Descriptor.Resizability  = Resizability }
          if (LineWrapping  != null) { Descriptor.LineWrapping  = LineWrapping }
          break
        case 'html-input':
        case 'css-input':
        case 'javascript-input':
        case 'json-input':
        case 'linelist-input':
        case 'numberlist-input':
        case 'integerlist-input':
          if (Placeholder  != null) { Descriptor.Placeholder  = Placeholder }
          if (minLength    != null) { Descriptor.minLength    = minLength }
          if (maxLength    != null) { Descriptor.maxLength    = maxLength }
          if (Resizability != null) { Descriptor.Resizability = Resizability }
          if (LineWrapping != null) { Descriptor.LineWrapping = LineWrapping }
          break
      }
    return Descriptor
  }

//------------------------------------------------------------------------------
//--                              Import Support                              --
//------------------------------------------------------------------------------

/**** ValueLooksLikeDeck ****/

  function ValueLooksLikeDeck (Serialization:serializableObject):boolean {
    try {
      validateDeckDescriptor(Serialization)
    } catch (Signal:any) {
      return false
    }
    return (Serialization.CardList != null) && (Serialization.WidgetList == null)
  }

/**** ValueLooksLikeCard ****/

  function ValueLooksLikeCard (
    Serialization:serializableObject, Index?:number
  ):boolean {
    try {
      validateCardDescriptor(Serialization,Index)
    } catch (Signal:any) {
      return false
    }
    return (Serialization.WidgetList != null)
  }

/**** ValueLooksLikeCardList ****/

  function ValueLooksLikeCardList (Serialization:serializableArray):boolean {
    return (
      ValueIsList(Serialization) &&
// @ts-ignore TS2532 type cast is ok
      (Serialization as any[]).every(
        (Value:any, Index:number) => ValueLooksLikeCard(Value,Index)
      )
    )
  }

/**** ValueLooksLikeWidget ****/

  function ValueLooksLikeWidget (
    Serialization:serializableObject, CardHint?:BC_Textline, Index?:number
  ):boolean {
    try {
      validateWidgetDescriptor(Serialization,CardHint,Index)
    } catch (Signal:any) {
      return false
    }
    return (Serialization.CardList == null)
  }

/**** ValueLooksLikeWidgetList ****/

  function ValueLooksLikeWidgetList (
    Serialization:serializableArray, CardHint?:string
  ):boolean {
    return (
      ValueIsList(Serialization) &&
// @ts-ignore TS2532 type cast is ok
      (Serialization as any[]).every(
        (Value:any, Index:number) => ValueLooksLikeWidget(
          Value, CardHint, CardHint == null ? undefined : Index
        )
      )
    )
  }

//------------------------------------------------------------------------------
//--                             Console Support                              --
//------------------------------------------------------------------------------

  const Default_CharLimit = 1050000           // a bit more than 2^20 characters
  const Default_LineLimit = 20000

/**** Console_clear ****/

  function Console_clear (Deck:BC_DeckProxy):void {
    Deck[$Console] = ''
    Deck[$rerender]()
  }

/**** Console_print ****/

  function Console_print (Deck:BC_DeckProxy, ArgList:any[]):void {
    Console_append(Deck,StringFromArguments(ArgList))
    Deck[$rerender]()
  }

/**** Console_println ****/

  function Console_println (Deck:BC_DeckProxy, ArgList:any[]):void {
    Console_append(Deck,StringFromArguments(ArgList,true))
    Deck[$rerender]()
  }

/**** Console_append ****/

  function Console_append (Deck:BC_DeckProxy, fullText:BC_Text):void {
    if (fullText.length === 0) { return }

    let LineCount = EOLCount(fullText)
    let CharCount = fullText.length

    if (
      (LineCount > (Deck.Console_LineLimit ?? Default_LineLimit)) ||
      (CharCount > (Deck.Console_CharLimit ?? Default_CharLimit))
    ) {
      Console_clear(Deck)

      fullText = compacted(fullText, Deck, LineCount, CharCount)
        Deck[$Console_LineCount] = EOLCount(fullText)+1 // count 1st line as well
        Deck[$Console_CharCount] = fullText.length
      Deck[$Console] = fullText
    } else {
      compactConsoleFor(Deck, LineCount, CharCount)

      Deck[$Console_LineCount] += LineCount
      Deck[$Console_CharCount] += CharCount

      Deck[$Console] += fullText
    }
  }

/**** compactConsoleFor ****/

  function compactConsoleFor (
    Deck:BC_DeckProxy, LineCount:BC_Ordinal, CharCount:BC_Ordinal
  ):void {
    let LinesToSkip = Deck[$Console_LineCount]+LineCount - (Deck.Console_LineLimit ?? Default_LineLimit)
    let CharsToSkip = Deck[$Console_CharCount]+CharCount - (Deck.Console_CharLimit ?? Default_CharLimit)

    if ((LinesToSkip <= 0) && (CharsToSkip <= 0)) { return }

    let Content = Deck[$Console]
    for (let EOLCount = 0, curIndex = -1;;) {
      curIndex = Content.indexOf('\n',curIndex+1)                // might be -1!
      if (curIndex < 0) {                   // no more EOLs, just a loooong line
        Console_clear(Deck)
        return
      }

      EOLCount += 1

      if ((EOLCount >= LinesToSkip) && (curIndex-EOLCount*28 >= CharsToSkip)) {
        Deck[$Console] = Content.slice(curIndex+1)
        return
      }
    }
  }

/**** compacted ****/

  function compacted (
    fullText:BC_Text, Deck:BC_DeckProxy, LineCount:BC_Ordinal, CharCount:BC_Ordinal
  ):BC_Text {
    let LinesToSkip = LineCount-Deck.Console_LineLimit
    let CharsToSkip = CharCount-Deck.Console_CharLimit

    for (let EOLCount = 0, curIndex = -1;;) {
      curIndex = fullText.indexOf('\n',curIndex+1)             // must be <> -1!
      EOLCount += 1

      if ((EOLCount >= LinesToSkip) && (curIndex >= CharsToSkip)) {
        return fullText.slice(curIndex+1)
      }
    }
  }

/**** EOLCount ****/

  export function EOLCount (fullText:BC_Text):BC_Ordinal {
    let MatchList = fullText.match(/\n/g)
    return (MatchList === null ? 0 : MatchList.length)
  }

/**** StringFromArguments ****/

  export function StringFromArguments (Arguments:any[], withEOL:boolean = false):BC_Text {
    let Result = ''
      for (let i = 0; i < Arguments.length; i++) {
        let Argument = Arguments[i]
        switch (typeof Argument) {
          case 'undefined': Result += '(undefined)';       break
          case 'boolean':   Result += Argument.toString(); break
          case 'number':    Result += Argument.toString(); break
          case 'string':    Result += Argument;            break
          case 'function':  Result += '(function)';        break
          case 'object':    Result += (
                              Argument === null ? '(null)' : Argument.toString()
                            );                             break
          default:          Result += '(unknown)';         break
        }
      }
    return Result + (withEOL ? '\n' : '')
  }

/**** useConsole (Hook) ****/
/*
  export function useConsole () {
    const { Deck } = useRenderingContext()

    function clearConsole ():void {
      Console_clear(Deck)
    }

    function print (...ArgList:any[]):void {
      Console_print(Deck,ArgList)
    }

    function println (...ArgList:any[]):void {
      Console_println(Deck,ArgList)
    }

    return { clearConsole, print, println }
  }
*/

//------------------------------------------------------------------------------
//--                              Error Handling                              --
//------------------------------------------------------------------------------

/**** BC_ErrorReport ****/

  const BC_ErrorSeverities = [ 'ignorable','annoying','severe','fatal' ]
  type  BC_ErrorSeverity   = typeof BC_ErrorSeverities[number]

  type BC_ErrorReport = {
    Severity:BC_ErrorSeverity,
    Title:BC_Textline, Message:BC_Text,
    Sufferer?:BC_Proxy, Property?:BC_Identifier,
    Cause?:any, LineNumber?:BC_Ordinal
  }

/**** BC_ErrorIndicator ****/

  export function BC_ErrorIndicator (PropSet:Indexable):any {
    return safelyRendered(() => {
      const { ErrorToShow } = PropSet

      const onClick = ():void => {
console.warn(ErrorToShow)          // please keep this line for easier debugging
        window.alert(ErrorMessageFor(ErrorToShow))
      }

      return html`<div class="bc-error-indicator" onClick=${onClick}/>`
    })
  }

  installStylesheetFor('bc-error-indicator',`
    .bc-error-indicator {
      display:inline-block; position:relative;
      width:24px; height:24px;
    }

    .bc-error-indicator::after {
      content:'';
      display:block; position:absolute; overflow:hidden;
      left:0px; top:0px; width:24px; height:24px;
      background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
      pointer-events:auto;
    }
  `)

/**** ErrorMessageFor ****/

  function ErrorMessageFor (ErrorReport:BC_ErrorReport):any {
    return `${ErrorReport.Title}\n\n${ErrorReport.Message}`
  }

//------------------------------------------------------------------------------
//--                            Visual Descriptors                            --
//------------------------------------------------------------------------------

  type BC_VisualDescriptor = BC_DeckDescriptor | BC_CardDescriptor | BC_WidgetDescriptor

/**** Deck Descriptor ****/

  export const BC_expectedOrientations = [ 'portrait','landscape','any' ]
  export type  BC_expectedOrientation  = typeof BC_expectedOrientations[number]

  type BC_DeckDescriptor = {
    Name?:string,

    DefaultWidth?: BC_Dimension,                            // recommended width
    DefaultHeight?:BC_Dimension,                           // recommended height
    expectedOrientation?:BC_expectedOrientation,  // expected device orientation

    minWidth?: BC_Dimension,
    minHeight?:BC_Dimension,
    maxWidth?: BC_Dimension,
    maxHeight?:BC_Dimension,

    pendingScript?:BC_Text,
    Script?:       BC_Text,
    Value?:        Serializable,

    CardList:BC_CardDescriptor[],

    SnapToGrid?:boolean,
    GridWidth?: BC_Dimension,
    GridHeight?:BC_Dimension,
  } & BC_visualProperties

/**** validateDeckDescriptor ****/

  function validateDeckDescriptor (Value:any):void {
    if (! ValueIsPlainObject(Value)) throwError(
      'InvalidArgument: the given deck descriptor is no plain JavaScript object'
    )

    if (Value.Name == null) throwError(
      'MissingArgument: the given deck descriptor does not contain the deck\'s name'
    )

    if (! ValueIsName(Value.Name)) throwError(
      'InvalidArgument: the given deck "Name" is no valid BC name'
    )

    const DeckName = Value.Name

    try {
      validateDeckPropertiesIn(Value)
      validateCardDescriptorList(Value.CardList)
    } catch (Signal:any) {
      if ((Signal.name === 'MissingArgument') || (Signal.name === 'InvalidArgument')) {
        Signal.message += ' in deck ' + quoted(DeckName)
      }
      throw Signal
    }
  }

/**** validateDeckPropertiesIn ****/

  function validateDeckPropertiesIn (Descriptor:serializableObject):void {
    rejectSetting       ('internalId',Descriptor)
//  rejectSetting             ('Name',Descriptor)
    acceptDimension          ('Width',Descriptor)
    acceptDimension         ('Height',Descriptor)
    acceptDimension       ('minWidth',Descriptor)
    acceptDimension      ('minHeight',Descriptor)
    acceptDimension       ('maxWidth',Descriptor)
    acceptDimension      ('maxHeight',Descriptor)
    acceptBoolean     ('toBeCentered',Descriptor)
    acceptOrdinal('Console_CharLimit',Descriptor)
    acceptOrdinal('Console_LineLimit',Descriptor)
    acceptOneOf('expectedOrientation',Descriptor,BC_expectedOrientations,'expected mobile device orientation')
    validateVisualPropertiesIn       (Descriptor)
    acceptText      ('HeadExtensions',Descriptor)
    rejectSetting       ('WidgetList',Descriptor)
    acceptBoolean       ('SnapToGrid',Descriptor)
    acceptDimension      ('GridWidth',Descriptor)
    acceptDimension     ('GridHeight',Descriptor)
  }

/**** validateCardDescriptorList ****/

  function validateCardDescriptorList (Value:any):void {
    if (Value == null) throwError(
      'MissingArgument: no card list for deck given'
    )

    if (! ValueIsArray(Value)) throwError(
      'InvalidArgument: invalid card list for deck given'
    )

    ;(Value as any[]).forEach((Value:any,i:number) => {
      validateCardDescriptor(Value,i)
    })
  }

/**** Card Descriptor ****/

  type BC_CardDescriptor = {
    Name?:       string,
    isPermanent?:boolean,

    pendingScript?:string,
    Script?:       string,
    Value?:        Serializable,

    WidgetList:BC_WidgetDescriptor[],
  } & BC_visualProperties

/**** validateCardDescriptor ****/

  function validateCardDescriptor (
    Value:any, Index?:number
  ):void {
    const CardHint = (
      Index == null
      ? 'card descriptor'
      : 'descriptor for card #' + Index
    )

    if (! ValueIsPlainObject(Value)) throwError(
      `InvalidArgument: the given ${CardHint} is no plain JavaScript object`
    )

    try {
      validateCardPropertiesIn(Value)
      validateWidgetDescriptorList(Value.WidgetList,CardHint)
    } catch (Signal:any) {
      if ((Signal.name === 'MissingArgument') || (Signal.name === 'InvalidArgument')) {
        Signal.message += ' in ' + CardHint
      }
      throw Signal
    }
  }

/**** validateCardPropertiesIn ****/

  function validateCardPropertiesIn (Descriptor:serializableObject):void {
    rejectSetting('internalId',Descriptor)
    acceptName          ('Name',Descriptor)
    acceptText      ('Synopsis',Descriptor)
    acceptBoolean('isPermanent',Descriptor)
    validateVisualPropertiesIn (Descriptor)
    acceptSetting  ('Overflows',Descriptor,ValueIsOverflowList,'overflow list')
    rejectSetting   ('CardList',Descriptor)
  }

/**** validateWidgetDescriptorList ****/

  function validateWidgetDescriptorList (Value:any, CardHint:BC_Textline):void {
    if (! ValueIsArray(Value)) throwError(
      `InvalidArgument: invalid widget list for ${CardHint} given`
    )

    ;(Value as any[]).forEach((Value:any,i:number) => {
      validateWidgetDescriptor(Value,CardHint,i)
    })
  }

/**** Widget Descriptor ****/

  type BC_WidgetDescriptor = {
    Name?:string,

    isFixed?:    boolean,
    isPermanent?:boolean,
    isHidden?:   boolean,
    isDisabled?: boolean,

    Anchors:BC_Anchors,
    Offsets:BC_Offsets,

    minWidth?: number,
    minHeight?:number,
    maxWidth?: number,
    maxHeight?:number,

    pendingScript?:string,
    Script?:       string,
    Value?:        Serializable,

    BorderWidths?:[number, number, number, number],     // top/right/bottom/left
    BorderStyles?:[BC_BorderStyle, BC_BorderStyle, BC_BorderStyle, BC_BorderStyle],
    BorderColors?:[string, string, string, string],     // top/right/bottom/left
    BorderRadii?: [number, number, number, number],               // tl/tr/br/bl
    BoxShadow?:   BC_BoxShadow,
  } & BC_visualProperties

/**** validateWidgetDescriptor ****/

  function validateWidgetDescriptor (
    Value:any, CardHint?:BC_Textline, Index?:number
  ):void {
    const WidgetHint = (
      Index == null
      ? 'widget descriptor'
      : 'descriptor for widget #' + Index + ' in ' + CardHint!
    )

    if (! ValueIsPlainObject(Value)) throwError(
      `InvalidArgument: the given ${WidgetHint} is no plain JavaScript object`
    )

    try {
      validateWidgetPropertiesIn(Value)
    } catch (Signal:any) {
      if ((Signal.name === 'MissingArgument') || (Signal.name === 'InvalidArgument')) {
        Signal.message += ' in ' + WidgetHint
      }
      throw Signal
    }
  }

/**** validateWidgetPropertiesIn ****/

  function validateWidgetPropertiesIn (Descriptor:serializableObject):void {
    rejectSetting  ('internalId',Descriptor)
    acceptName           ('Name',Descriptor)
    acceptBoolean     ('isFixed',Descriptor)
    acceptBoolean ('isPermanent',Descriptor)
    acceptBoolean    ('isHidden',Descriptor)
    acceptBoolean  ('isDisabled',Descriptor)
    acceptSetting     ('Anchors',Descriptor,ValueIsAnchors,'anchor list')
    acceptSetting     ('Offsets',Descriptor,ValueIsOffsets,'offset list')
    acceptDimension  ('minWidth',Descriptor)
    acceptDimension ('minHeight',Descriptor)
    acceptDimension  ('maxWidth',Descriptor)
    acceptDimension ('maxHeight',Descriptor)
    validateVisualPropertiesIn  (Descriptor)
    acceptSetting('BorderWidths',Descriptor,(Value:any) => ValueIsListSatisfying(Value,ValueIsDimension,  4,4),'list of border widths')
    acceptSetting('BorderStyles',Descriptor,(Value:any) => ValueIsListSatisfying(Value,ValueIsBorderStyle,4,4),'list of border styles')
    acceptSetting('BorderColors',Descriptor,(Value:any) => ValueIsListSatisfying(Value,ValueIsColor,      4,4),'list of border colors')
    acceptSetting ('BorderRadii',Descriptor,(Value:any) => ValueIsListSatisfying(Value,ValueIsDimension,  4,4),'list of border radii')
    acceptSetting   ('BoxShadow',Descriptor,ValueIsBoxShadow,'box shadow')
    acceptSetting   ('Overflows',Descriptor,ValueIsOverflowList,'overflow list')
    rejectSetting    ('CardList',Descriptor)
    rejectSetting  ('WidgetList',Descriptor)
  }

/**** validateVisualPropertiesIn ****/

  function validateVisualPropertiesIn (Descriptor:serializableObject):void {
    acceptTextline      ('FontFamily',Descriptor)
    acceptDimension       ('FontSize',Descriptor)
    acceptOneOf         ('FontWeight',Descriptor,BC_FontWeights,'font weight')
    acceptOneOf          ('FontStyle',Descriptor,BC_FontStyles, 'font style')
    acceptSetting   ('TextDecoration',Descriptor,ValueIsTextDecoration,'text decoration')
    acceptSetting       ('TextShadow',Descriptor,ValueIsTextShadow,    'text shadow')
    acceptOneOf      ('TextAlignment',Descriptor,BC_TextAlignments,   'text alignment')
    acceptDimension     ('LineHeight',Descriptor)
    acceptColor    ('ForegroundColor',Descriptor)
    acceptBoolean    ('hasBackground',Descriptor)
    acceptColor    ('BackgroundColor',Descriptor)
    acceptSetting('BackgroundTexture',Descriptor,ValueIsBackgroundTexture,'background texture')
    acceptSetting          ('Opacity',Descriptor,(Value:any) => ValueIsNumberInRange(Value, 0,100, true,true),'opacity')
    acceptOneOf             ('Cursor',Descriptor,BC_Cursors,'cursor')
//  rejectSetting           ('Script',Descriptor)
    acceptText       ('pendingScript',Descriptor)
//  acceptValue              ('Value',Descriptor)   // actually accepts anything
    acceptPlainObject          ('own',Descriptor)
  }

//------------------------------------------------------------------------------
//--                                Acceptors                                 --
//------------------------------------------------------------------------------

/**** acceptSetting ****/

  function acceptSetting (
    Key:BC_Identifier, Descriptor:Indexable, Validator:Function,
    Description:BC_Textline
  ):void {
//  expectIdentifier   ('property name',Key)
//  expectPlainObject     ('descriptor',Descriptor)
//  expectFunction('validator function',Validator)
//  expectTextline       ('expectation',Description)

    if ((Key in Descriptor) && (Descriptor[Key] !== undefined)) {
      if (Validator(Descriptor[Key]) != true) throwError(
        'InvalidArgument: property ' + quoted(Key) + ' is no valid ' + Description
      )
    }
  }

/**** rejectSetting ****/

  function rejectSetting (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    if ((Key in Descriptor) && (Descriptor[Key] != null)) throwError(
      'InvalidArgument: property ' + quoted(Key) + ' must not be configured'
    )
  }

/**** acceptBoolean ****/

  function acceptBoolean (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsBoolean,'boolean value')
  }

/**** acceptOrdinal ****/

  function acceptOrdinal (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsOrdinal,'ordinal number')
  }

/**** acceptText ****/

  function acceptText (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsText,'text')
  }

/**** acceptTextline ****/

  function acceptTextline (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsTextline,'line of text')
  }

/**** acceptOneOf ****/

  function acceptOneOf (
    Key:BC_Identifier, Descriptor:Indexable, ValueList:any[],
    Description:BC_Textline
  ):void {
//  expectIdentifier      ('property name',Key)
//  expectPlainObject        ('descriptor',Descriptor)
//  expectList('list of acceptable values',ValueList)
//  expectTextline          ('expectation',Description)

    acceptSetting(
      Key,Descriptor,(Value:any) => ValueIsOneOf(Value,ValueList),Description
    )
  }

/**** acceptPlainObject ****/

  function acceptPlainObject (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsPlainObject,'JavaScript object')
  }

/**** acceptFunction ****/

  function acceptFunction (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsFunction,'JavaScript function')
  }

/**** acceptName ****/

  function acceptName (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsName,'BC name')
  }

/**** acceptLocation ****/

  function acceptLocation (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsLocation,'coordinate value')
  }

/**** acceptDimension ****/

  function acceptDimension (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsDimension,'bcension value')
  }

/**** acceptAnchors ****/

  function acceptAnchors (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsAnchors,'BC anchor list')
  }

/**** acceptOffsets ****/

  function acceptOffsets (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsOffsets,'BC offset list')
  }

/**** acceptColor ****/

  function acceptColor (
    Key:BC_Identifier, Descriptor:Indexable
  ):void {
//  expectIdentifier('property name',Key)
//  expectPlainObject  ('descriptor',Descriptor)

    acceptSetting(Key,Descriptor,ValueIsColor,'color')
  }



















/**** safelyRendered ****/

  export function safelyRendered (Renderer:Function):any {
    expectFunction('rendering function',Renderer)

    const [ Error,resetError ] = useErrorBoundary()
    if (Error != null) {
      console.warn('rendering error caught by preact: ' + Error)
      return html`<${BC_ErrorIndicator} error=${Error} resetError=${resetError}/>`
    }

    try {
      return Renderer()
    } catch (Signal:any) {
      console.warn('rendering error: ' + Signal)
      return html`<${BC_ErrorIndicator} error=${Signal} resetError=${resetError}/>`
    }
  }



//----------------------------------------------------------------------------//
//                               data model                                   //
//----------------------------------------------------------------------------//

const DefaultDeckWidth  = 800
const DefaultDeckHeight = 600



/**** BC_Visual ****/

interface BC_Visual {
  Name:   string
  Script: string
  Value?: Serializable    // persistent, JSON-serializable per-Visual value
  // visual properties — converted to inline CSS at render time
  FontFamily?:        BC_Textline
  FontSize?:          BC_Dimension
  FontWeight?:        BC_FontWeight
  FontStyle?:         BC_FontStyle
  TextDecoration?:    BC_TextDecoration
  TextShadow?:        BC_TextShadow
  TextAlignment?:     BC_TextAlignment
  LineHeight?:        BC_Dimension
  ForegroundColor?:   BC_Color
  hasBackground?:     boolean
  BackgroundColor?:   BC_Color
  BackgroundTexture?: BC_BackgroundTexture
  Opacity?:           number
  Cursor?:            BC_Cursor
}

export interface BC_Deck extends BC_Visual {
  Id:                  string
  readOnly:            boolean
  swipeToAdjacentCard: boolean
  Cards:               BC_Card[]
  SnapToGrid?:         boolean         // snap dragging to grid points (editing)
  GridWidth?:          number                              // grid raster in px
  GridHeight?:         number                                          // dto.
  CardWidth?:          number      // native card canvas width (default: 800)
  CardHeight?:         number      // native card canvas height (default: 600)
  localBehaviors?:     Record<string,string>   // name -> behaviour source text
}

/**** BC_Grid — resolved grid settings, used while editing ****/

type BC_Grid = { isActive:boolean; Width:number; Height:number }

export interface BC_Card extends BC_Visual {
  Id:           string  // 'bc-card-1', 'bc-card-2', ...
  Color:        string | null
  Alpha:        number
  dontSearch:   boolean
  Widgets:      BC_Widget[]
}

type BC_WidgetType = 'generic' | 'button' | 'field' | 'shape' | 'picture'

type BC_ButtonVariant  = 'rounded-rect' | 'rectangle' | 'oval' | 'shadow' | 'checkbox' | 'radio' | 'standard' | 'transparent'
type BC_FieldVariant   = 'opaque' | 'transparent' | 'shadow' | 'rectangle'
type BC_ShapeVariant   = 'rectangle' | 'rounded-rectangle' | 'oval' | 'line' | 'arc' | 'polygon'
type BC_PictureVariant = 'scale-aspect-fill' | 'scale-aspect-fit' | 'scale-to-fill' | 'actual-size' | 'center'
type BC_WidgetVariant  = BC_ButtonVariant | BC_FieldVariant | BC_ShapeVariant | BC_PictureVariant

// BC_Widget is the unified type for all objects placed on a card.
// The rendering behavior is determined by the 'type' field and loaded via behaveLike().
// Subtype interfaces (BC_Button, BC_Field, BC_Shape, BC_Picture) are narrower views
// of BC_Widget and are used only for type-safe access in internal behaviors.
export interface BC_Widget extends BC_Visual {
  Id:       string    // 'bc-widget-1', 'bc-widget-2', ...
  Number:   number
  Type:     BC_WidgetType
  zIndex:   number
  Anchors:  BC_Anchors
  Offsets:  BC_Offsets
  visible:  boolean
  // computed at render time from Anchors + Offsets + canvas dimensions:
  x?:               BC_Location
  y?:               BC_Location
  Width?:           BC_Dimension
  Height?:          BC_Dimension
  Position?:        BC_Location
  Size?:            BC_Dimension
  Geometry?:        BC_Geometry
  changeGeometryTo?:(x?:BC_Location|null, y?:BC_Location|null, Width?:BC_Dimension|null, Height?:BC_Dimension|null) => BC_Offsets
  Configuration?: Record<string, unknown>   // custom-widget config (generic only)
  Variant?:   BC_WidgetVariant   // button/field/shape/picture visual style
  // button fields:
  showName?:     boolean
  autoHilite?:   boolean
  enabled?:      boolean
  sharedHilite?: boolean
  Hilite?:       boolean
  IconId?:       string | null
  // field fields:
  lockText?:     boolean
  scrolling?:    boolean
  showLines?:    boolean
  dontSearch?:   boolean
  sharedText?:   boolean
  Value?:         string
  FontSize?:     number
  FontWeight?:   'normal' | 'bold'
  TextAlign?:    'left' | 'center' | 'right'
  Color?:        string
  // shape fields:
  FillColor?:    string
  BorderColor?:  string
  BorderWidth?:  number
  ArrowStart?:   boolean    // arrowhead at the start point (line/arc only)
  ArrowEnd?:     boolean    // arrowhead at the end point (line/arc only)
  Curvature?:    number     // arc curvature, -1..1 (arc only, default: 0.4)
  Sides?:        number     // number of polygon sides (polygon only, default: 6)
  CornerRadius?: number     // corner radius in px (rounded-rectangle only, default: 12)
  // picture fields:
  ImageData?:    string
  actualWidth?:  number
  actualHeight?: number
  // shared styling:
  BorderWidths?:  [number, number, number, number]           // top/right/bottom/left
  BorderStyles?:  [BC_BorderStyle, BC_BorderStyle, BC_BorderStyle, BC_BorderStyle]
  BorderColors?:  [string, string, string, string]           // top/right/bottom/left
  BorderRadii?:   [number, number, number, number]           // tl/tr/br/bl
  BoxShadow?:     BC_BoxShadow
}

// narrow interfaces used only for type-safe access inside internal behaviors
interface BC_Button extends BC_Widget { Type: 'button'; Variant: BC_ButtonVariant; showName: boolean; autoHilite: boolean; enabled: boolean; sharedHilite: boolean }
interface BC_Field  extends BC_Widget { Type: 'field';  Variant: BC_FieldVariant;  lockText: boolean; scrolling: boolean; showLines: boolean; dontSearch: boolean; sharedText: boolean; Value: string }
interface BC_Shape  extends BC_Widget { Type: 'shape';  Variant: BC_ShapeVariant }
interface BC_Picture extends BC_Widget { Type: 'picture'; Variant: BC_PictureVariant; autoHilite: boolean; ImageData: string; actualWidth: number; actualHeight: number }

// Proxy types — ES6 Proxy wrappers, created temporarily for active Visuals.
// Property writes trigger forceUpdate(); geometry (x/y/Width/Height) is computed live.

// forward declarations (mutually recursive)
// 'own' is a plain object for script-private state; writes to it do NOT trigger a re-render
type BC_DeckProxy   = BC_Deck   & {
  own:Record<string,unknown>; readonly Deck:BC_DeckProxy; readonly Card:BC_CardProxy
  [$Console]:           string
  [$rerender]:          () => void
  [$Console_LineCount]: number
  [$Console_CharCount]: number
  Console_LineLimit:           number
  Console_CharLimit:           number
}
type BC_CardProxy   = BC_Card   & { own:Record<string,unknown>; readonly Deck:BC_DeckProxy; readonly Card:BC_CardProxy; readonly WidgetList:BC_WidgetProxy[] }
type BC_WidgetProxy = BC_Widget & { own:Record<string,unknown>; readonly Deck:BC_DeckProxy; readonly Card:BC_CardProxy }
type BC_Proxy = BC_DeckProxy | BC_CardProxy | BC_WidgetProxy

//----------------------------------------------------------------------------//
//                                  styles                                    //
//----------------------------------------------------------------------------//

const Styles = `
  :is(bc-deck, bc-designer) *,
  :is(bc-deck, bc-designer) *::before,
  :is(bc-deck, bc-designer) *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :is(bc-deck, bc-designer) {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --menubar-h: 44px;
    --bottombar-h: 44px;
    --color-accent: #1d6fd8;
    --color-bg:     #3a3a3c;
    --bc-z-backdrop: 90;
    --bc-z-dropdown: 100;
    --bc-z-dialog:   500;
  }

  .bc-app {
    width:   100%;
    height:  100%;
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
    overflow: hidden;
    position: relative;
  }

  /* ---- menu bar -------------------------------------------------------- */

  .bc-menu-bar {
    flex-shrink: 0;
    height: var(--menubar-h);
    background: #1c1c1e;
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 2px;
    position: relative;
    user-select: none;
  }

  .bc-menu-bar-title {        /* a normal flex child between the button groups -
                                so it never overlaps the buttons, just shrinks */
    flex: 1;
    min-width: 0;
    text-align: center;
    padding: 0 8px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    pointer-events: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bc-menu-btn {
    background: transparent;
    border: none;
    color: #fff;
    padding: 5px 9px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }
  .bc-menu-btn:hover:not(:disabled)  { background: rgba(255,255,255,0.10); }
  .bc-menu-btn:active:not(:disabled) { background: rgba(255,255,255,0.18); }
  .bc-menu-btn.active                { background: rgba(255,255,255,0.12); }
  .bc-menu-btn:disabled              { opacity: 0.30; cursor: default; }

  .bc-search-input {
    background: rgba(255,255,255,0.14);
    border: none;
    border-radius: 7px;
    padding: 5px 10px;
    color: #fff;
    font-size: 13px;
    width: 150px;
    outline: none;
    font-family: inherit;
  }
  .bc-search-input::placeholder { color: rgba(255,255,255,0.45); }
  .bc-search-input:focus { background: rgba(255,255,255,0.20); }

  /* ---- bc-dropdown -------------------------------------------------------- */

  .bc-dropdown-backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--bc-z-backdrop);
  }

  .bc-dropdown {
    position: absolute;
    top: calc(var(--menubar-h) + 4px);
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px;
    padding: 5px;
    min-width: 190px;
    z-index: var(--bc-z-dropdown);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
  }

  .bc-dropdown-item {
    padding: 8px 12px;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .bc-dropdown-item:hover              { background: rgba(255,255,255,0.10); }
  .bc-dropdown-item.disabled           { opacity: 0.38; pointer-events: none; }
  .bc-dropdown-item .bc-checkmark         { color: #0A84FF; font-size: 15px; }
  .bc-dropdown-separator               { height: 1px; background: rgba(255,255,255,0.10); margin: 4px 0; }

  .bc-dropdown-submenu { position: relative; }
  .bc-submenu {
    position: absolute;
    left: 100%; top: -5px;
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px;
    padding: 5px;
    min-width: 190px;
    z-index: var(--bc-z-dropdown);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
  }
  .bc-dropdown-item.has-submenu::after { content: '▸'; margin-left: auto; opacity: 0.6; }
  .bc-dropdown-item.has-submenu.open   { background: rgba(255,255,255,0.10); }

  /* ---- card area ------------------------------------------------------- */

  .bc-card-area {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: var(--color-bg);
    container-type: size;
  }

  /* deck-level on('render') output: a deck-wide backdrop sharing the card's
     geometry (sits inside the card wrapper, behind the card canvas) */
  .bc-deck-render {
    overflow: hidden;
  }

  .bc-card-canvas {
    position: absolute;
    top: 0; left: 0;
    background: transparent;   /* default: transparent so the deck render shows through;
                                  the white "paper" + shadow live on the card wrapper */
    border-radius: 3px;
    overflow: hidden;
    transform-origin: top left;
  }

  /* ---- objects --------------------------------------------------------- */

  .bc-widget {
    position: absolute;
    overflow: hidden;
  }

  /* button */
  .bc-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    border: none;
    outline: none;
    user-select: none;
    transition: opacity 0.1s, filter 0.1s;
  }
  .bc-btn:disabled { opacity: 0.4; cursor: default; }
  .bc-btn:active:not(:disabled) { filter: brightness(0.82); }

  .bc-btn.s-rounded-rect {
    background: #1d6fd8; color: #fff; border-radius: 10px;
  }
  .bc-btn.s-rectangle {
    background: #e9e9eb; color: #111; border-radius: 3px; border: 1px solid #aaa;
  }
  .bc-btn.s-shadow {
    background: #f0f0f2; color: #111; border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.30); border: 1px solid #d0d0d5;
  }
  .bc-btn.s-transparent { background: transparent; color: #1d6fd8; }
  .bc-btn.s-oval        { background: #1d6fd8; color: #fff; border-radius: 9999px; }
  .bc-btn.s-standard {
    background: linear-gradient(#f7f7f7, #e0e0e4); color: #222;
    border-radius: 7px; border: 1px solid #bbb;
  }
  .bc-btn.s-checkbox,
  .bc-btn.s-radio {
    background: transparent; color: #111;
    justify-content: flex-start; gap: 8px; font-size: 13px;
  }
  .bc-btn.s-checkbox::before,
  .bc-btn.s-radio::before {
    content: ''; width: 16px; height: 16px;
    border: 2px solid #888; border-radius: 3px; flex-shrink: 0;
  }
  .bc-btn.s-radio::before { border-radius: 50%; }
  .bc-btn.s-checkbox.hilite::before,
  .bc-btn.s-radio.hilite::before { background: #1d6fd8; border-color: #1d6fd8; }

  /* field */
  .bc-field {
    font-family: inherit; font-size: 14px; line-height: 1.55; color: #111;
    padding: 4px 6px; resize: none; white-space: pre-wrap; overflow-wrap: break-word;
  }
  .bc-field.scrollable { overflow-y: auto; }
  .bc-field.no-scroll  { overflow: hidden; }
  .bc-field.s-opaque      { background: #fff; border: 1px solid #ccc; border-radius: 2px; }
  .bc-field.s-transparent { background: transparent; border: none; }
  .bc-field.s-shadow      { background: #fff; border-radius: 3px; box-shadow: 1px 1px 4px rgba(0,0,0,0.25); }
  .bc-field.s-rectangle   { background: #fff; border: 1px solid #888; }
  .bc-field.show-lines {
    background-image: repeating-linear-gradient(
      transparent, transparent calc(1.55em - 1px), #d8d8dc calc(1.55em - 1px), #d8d8dc 1.55em
    );
  }
  textarea.bc-field { resize: none; outline: none; }

  /* shape: SVG content may extend beyond the rect (arrowheads) - both the
     wrapper AND the SVG element itself need "overflow:visible" (SVG clips
     its contents to the viewport by default) */
  .bc-shape     { overflow: visible; }
  .bc-shape svg { overflow: visible; }

  /* picture */
  .bc-picture { width: 100%; height: 100%; }
  .bc-picture.s-scale-aspect-fill { object-fit: cover; }
  .bc-picture.s-scale-aspect-fit  { object-fit: contain; }
  .bc-picture.s-scale-to-fill     { object-fit: fill; }
  .bc-picture.s-actual-size       { object-fit: none; }
  .bc-picture.s-center            { object-fit: none; object-position: center; }


  /* ---- bottom bar ------------------------------------------------------ */

  .bc-bottom-bar {
    flex-shrink: 0; height: var(--bottombar-h); background: #1c1c1e;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 16px; user-select: none;
  }
  .bc-nav-btn {
    background: transparent; border: none; color: #fff; font-size: 20px;
    padding: 4px 10px; border-radius: 5px; cursor: pointer;
    line-height: 1; font-family: inherit;
  }
  .bc-nav-btn:hover:not(:disabled)  { background: rgba(255,255,255,0.10); }
  .bc-nav-btn:active:not(:disabled) { background: rgba(255,255,255,0.18); }
  .bc-nav-btn:disabled { opacity: 0.30; cursor: default; }
  .bc-nav-btn.active   { background: rgba(255,255,255,0.14); }
  .bc-bottom-bar-center { display: flex; gap: 4px; }
  .bc-card-counter {
    font-size: 12px; color: rgba(255,255,255,0.55);
    min-width: 80px; text-align: center;
  }

  /* ---- bc-dialog ---------------------------------------------------------- */

  .bc-dialog-backdrop {           /* absolute: scoped to the BC element only */
    position: absolute; inset: 0; background: rgba(0,0,0,0.6); z-index: var(--bc-z-dialog);
    display: flex; align-items: center; justify-content: center;
  }
  .bc-dialog {
    background: #2c2c2e; border-radius: 14px; padding: 24px 20px 16px;
    min-width: 300px; max-width: 440px; color: #fff;
    box-shadow: 0 20px 60px rgba(0,0,0,0.65);
  }
  .bc-dialog-title { font-size: 17px; font-weight: 600; text-align: center; margin-bottom: 8px; }
  .bc-dialog-msg   { font-size: 14px; color: rgba(255,255,255,0.80); text-align: center; margin-bottom: 16px; }
  .bc-dialog-input {
    width: 100%; background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.18);
    border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 15px;
    font-family: inherit; outline: none; margin-bottom: 14px;
  }
  .bc-dialog-input:focus { border-color: rgba(255,255,255,0.35); }
  .bc-dialog-buttons { display: flex; gap: 8px; justify-content: flex-end; }
  .bc-dialog-btn {
    padding: 8px 18px; border-radius: 8px; border: none; cursor: pointer;
    font-size: 14px; font-weight: 500; font-family: inherit;
  }
  .bc-dialog-btn.primary   { background: #1d6fd8; color: #fff; }
  .bc-dialog-btn.secondary { background: rgba(255,255,255,0.12); color: #fff; }
  .bc-dialog.bc-dialog-wide { min-width: 480px; max-width: 680px; width: 90%; }
  .bc-dialog-textarea {
    width: 100%; height: 280px; background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.18); border-radius: 8px;
    padding: 10px 12px; color: #fff; font-size: 12px; font-family: monospace;
    outline: none; margin-bottom: 14px; resize: vertical; box-sizing: border-box;
  }
  .bc-dialog-textarea:focus { border-color: rgba(255,255,255,0.35); }

  /* ---- edit mode ------------------------------------------------------- */

  .bc-main-area {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    min-height: 0;
  }

  .bc-edit-layer {
    position: absolute;
    inset: 0;
    z-index: 9000;
  }

  .bc-edit-hit {
    position: absolute;
    cursor: move;
    background: transparent;
    touch-action: none;              /* let pointer drags work on touch devices */
    -webkit-touch-callout: none;     /* suppress iOS long-press callout */
    user-select: none;
  }
  .bc-edit-hit.invisible { outline: 1px dashed rgba(0,0,0,0.30); }

  .bc-selection-frame {
    position: absolute;
    outline: 2px solid #0A84FF;
    pointer-events: none;
    z-index: 9500;
  }
  .bc-selection-member {
    position: absolute;
    outline: 1px solid #0A84FF;
    pointer-events: none;
    z-index: 9400;
  }
  .bc-marquee {
    position: absolute;
    border: 1px solid #0A84FF;
    background: rgba(10,132,255,0.12);
    pointer-events: none;
    z-index: 9600;
  }
  .bc-handle {
    position: absolute;
    background: #fff;
    border: 1px solid #0A84FF;
    border-radius: 2px;
    pointer-events: auto;
    touch-action: none;              /* let pointer drags work on touch devices */
    -webkit-touch-callout: none;     /* suppress iOS long-press callout */
    user-select: none;
  }

  .bc-props-panel {
    flex-shrink: 0;
    width: 260px;
    background: #1c1c1e;
    border-left: 1px solid rgba(255,255,255,0.10);
    color: #fff;
    font-size: 12px;
    overflow-y: auto;
    padding: 12px;
  }
  .bc-props-title    { font-size: 14px; font-weight: 600; }
  .bc-props-subtitle { font-size: 11px; color: rgba(255,255,255,0.45); margin-bottom: 8px; }
  .bc-props-empty    { color: rgba(255,255,255,0.55); font-size: 12px; padding-top: 20px; text-align: center; }
  .bc-props-section  {
    font-size: 10px; text-transform: uppercase; letter-spacing: 1px;
    color: rgba(255,255,255,0.40); margin: 14px 0 6px;
    border-bottom: 1px solid rgba(255,255,255,0.10); padding-bottom: 3px;
  }
  .bc-props-row {
    display: flex; align-items: center; gap: 6px; margin-bottom: 5px;
  }
  .bc-props-row.column { flex-direction: column; align-items: stretch; }
  .bc-props-row label {
    flex: 0 0 80px; color: rgba(255,255,255,0.65); font-size: 11px;
  }
  .bc-props-row.column label { flex: none; }
  .bc-props-row input[type="text"],
  .bc-props-row input[type="number"],
  .bc-props-row select,
  .bc-props-row textarea {
    flex: 1; min-width: 0;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 5px;
    color: #fff; font-size: 11px; font-family: inherit;
    padding: 4px 6px; outline: none;
  }
  .bc-props-row textarea {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    resize: vertical;
  }
  .bc-props-row input[type="color"] {
    width: 26px; height: 22px; flex: none;
    padding: 0; border: none; background: transparent; cursor: pointer;
  }
  .bc-props-row input.bc-props-opacity {       /* the opacity (%) field next to a colour picker */
    flex: 0 0 48px;
  }
  .bc-props-row input[type="checkbox"] { accent-color: #0A84FF; }
  .bc-props-row select option { background: #2c2c2e; }
  .bc-props-hint { font-size: 10px; color: rgba(255,255,255,0.35); margin-top: 2px; }
  .bc-props-btn {
    flex: 1;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 5px;
    color: #fff; font-size: 12px; font-family: inherit;
    padding: 4px 0; cursor: pointer;
  }
  .bc-props-btn:hover { background: rgba(255,255,255,0.18); }
  .bc-props-btn.copy { width: 100%; margin-top: 16px; padding: 7px 0; }
  .bc-props-btn.delete {
    width: 100%; margin-top: 6px; padding: 7px 0;
    background: rgba(255,69,58,0.16); border-color: rgba(255,69,58,0.40);
    color: #ff6961;
  }
  .bc-props-btn.delete:hover { background: rgba(255,69,58,0.28); }

  /* ---- decks panel ---------------------------------------------------- */

  .bc-decks-panel {
    position: absolute;
    left: 0; top: var(--menubar-h); bottom: var(--bottombar-h);
    width: 250px;
    display: flex; flex-direction: column;
    background: #1c1c1e;
    border-right: 1px solid rgba(255,255,255,0.12);
    box-shadow: 8px 0 28px rgba(0,0,0,0.45);
    z-index: var(--bc-z-dropdown);
    user-select: none;
  }
  .bc-decks-header {
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 8px 8px 12px;
    color: rgba(255,255,255,0.55);
    font-size: 11px; text-transform: uppercase; letter-spacing: 1px;
  }
  .bc-decks-list { flex: 1; overflow-y: auto; padding: 0 6px 8px; }
  .bc-decks-item {
    display: flex; align-items: center; gap: 2px;
    padding: 4px 6px; margin-bottom: 2px;
    color: #fff; font-size: 13px;
    border-radius: 6px;
  }
  .bc-decks-item:hover  { background: rgba(255,255,255,0.08); }
  .bc-decks-item.active { background: rgba(29,111,216,0.35); }
  .bc-decks-name {
    flex: 1; min-width: 0;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    cursor: pointer; padding: 3px 2px;
  }
  .bc-decks-item.active .bc-decks-name { cursor: default; }
  .bc-decks-empty {
    color: rgba(255,255,255,0.40); font-size: 12px;
    text-align: center; padding: 16px 0;
  }
  .bc-decks-new {
    flex-shrink: 0; margin: 0 10px 10px;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 6px;
    color: #fff; font-size: 12px; font-family: inherit;
    padding: 6px 0; cursor: pointer;
  }
  .bc-decks-new:hover { background: rgba(255,255,255,0.18); }
  .bc-decks-remember {
    flex-shrink: 0; display: flex; align-items: center; gap: 7px;
    margin: 2px 12px 10px; cursor: pointer;
    color: rgba(255,255,255,0.65); font-size: 11px;
    border-top: 1px solid rgba(255,255,255,0.10); padding-top: 9px;
  }
  .bc-decks-remember input[type="checkbox"] { accent-color: #0A84FF; cursor: pointer; }

  /* ---- card browser ----------------------------------------------------- */

  .bc-cards-item {
    display: flex; flex-direction: column;
    padding: 6px; margin-bottom: 4px;
    border-radius: 8px;
    border: 1px solid transparent;
  }
  .bc-cards-item:hover  { background: rgba(255,255,255,0.06); }
  .bc-cards-item.active {
    background: rgba(29,111,216,0.22);
    border-color: rgba(29,111,216,0.55);
  }
  .bc-cards-main {
    display: flex; align-items: center; gap: 10px;
    cursor: pointer; min-width: 0;
  }
  .bc-cards-item.active .bc-cards-main { cursor: default; }
  .bc-card-thumb {
    position: relative; overflow: hidden; flex-shrink: 0;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }
  .bc-cards-info { flex: 1; min-width: 0; }
  .bc-cards-name {
    color: #fff; font-size: 13px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .bc-cards-sub  { color: rgba(255,255,255,0.45); font-size: 10px; }
  .bc-cards-actions {
    display: flex; justify-content: flex-end; gap: 2px;
    margin-top: 3px;
  }
  .bc-cards-actions button:disabled { opacity: 0.30; cursor: default; }

  /* ---- editor window --------------------------------------------------- */

  .bc-editor-backdrop {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.35);
    z-index: 450;
  }
  .bc-editor-window {
    position: fixed;
    display: flex; flex-direction: column;
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.65);
    z-index: 460;
    overflow: hidden;
  }
  .bc-editor-header {
    flex-shrink: 0;
    padding: 9px 14px;
    background: #1c1c1e;
    color: #fff; font-size: 13px; font-weight: 600;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    cursor: move; user-select: none;
    touch-action: none;
  }
  .bc-editor-textarea {
    flex: 1; min-height: 0;
    margin: 10px 12px 0; padding: 8px 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 8px;
    color: #fff;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px; line-height: 1.5;
    resize: none; outline: none;
    white-space: pre; overflow: auto;
  }
  .bc-editor-footer {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 8px;
    padding: 10px 12px;
  }
  .bc-editor-hint {
    flex: 1;
    color: rgba(255,255,255,0.35); font-size: 10px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .bc-editor-resizer {
    position: absolute; right: 0; bottom: 0;
    width: 18px; height: 18px;
    cursor: nwse-resize;
    touch-action: none;
    background:
      linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.35) 60%, transparent 60%,
                      transparent 70%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.35) 80%, transparent 80%);
  }

  .bc-props-rowheader {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%;
  }
  .bc-props-rowheader label { flex: 1; }
  .bc-props-expand {
    background: transparent; border: none; cursor: pointer;
    color: #4ca2ff; font-size: 13px; line-height: 1;
    padding: 1px 4px; border-radius: 4px;
  }
  .bc-props-expand:hover { background: rgba(255,255,255,0.12); }

  /* ---- console --------------------------------------------------------- */

  .bc-console {
    flex-shrink: 0;
    height: 140px;
    display: flex; flex-direction: column;
    background: #111113;
    border-top: 1px solid rgba(255,255,255,0.12);
  }
  .bc-console-header {
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: space-between;
    padding: 3px 10px;
    color: rgba(255,255,255,0.55);
    font-size: 11px; text-transform: uppercase; letter-spacing: 1px;
    user-select: none;
  }
  .bc-console-btn {
    background: transparent; border: none; cursor: pointer;
    color: rgba(255,255,255,0.65); font-size: 12px; font-family: inherit;
    padding: 2px 8px; border-radius: 4px;
  }
  .bc-console-btn:hover { background: rgba(255,255,255,0.10); color: #fff; }
  .bc-console-output {
    flex: 1; overflow: auto; margin: 0;
    padding: 4px 10px 8px;
    color: #9ee49e;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 11px; line-height: 1.5;
    white-space: pre-wrap; overflow-wrap: break-word;
  }
`

//----------------------------------------------------------------------------//
//                            script runtime                                 //
//----------------------------------------------------------------------------//

// every Visual has an async script; handlers are registered with on('msg', fn)

type BC_NavTarget =
  | { type:'next' }
  | { type:'prev' }
  | { type:'first' }
  | { type:'last' }
  | { type:'card-name';  name:string  }
  | { type:'card-id';    id:string    }
  | { type:'card-index'; index:number }

interface BC_ScriptContext {
  go:           (target:unknown) => void
  openURL:      (url:string) => void
  answer:       (message:string, ...buttons:string[]) => Promise<string>
  ask:          (prompt:string, defaultValue?:string) => Promise<string | null>
  Card:         (nameOrNum:string|number) => BC_CardRef | null
  CardNumber:   () => number                        // 1-based index of the card
  CardCount:    () => number
  Widget:       (nameOrIndex:string|number) => BC_WidgetProxy | null
  send:         (Target:string|number|BC_WidgetProxy, msg:string, ...ArgList:unknown[]) => Promise<boolean>
  print:        (...ArgList:unknown[]) => void
  println:      (...ArgList:unknown[]) => void
  clearConsole: () => void
  defineLocalBehavior: (Name:string, Fn:unknown) => string
  localBehavior:       (Name:string) => string
  saveDeck:    () => Promise<void>         // persist the deck to the browser store
  me:        BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null
  my:        BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null   // synonym for "me"
  I:         BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null   // synonym for "me"
  nextCard:  BC_CardRef
  prevCard:  BC_CardRef
  firstCard: BC_CardRef
  lastCard:  BC_CardRef
  html:      typeof html    // htm/preact tagged template literal — intentionally lowercase, an exception to the otherwise Capitalized scripting-API bindings; do NOT re-import preact or htm
  preact:    typeof Preact  // the most important preact exports — do NOT re-import preact
}

/**** BC_ConsoleFns — console functions, provided by the surrounding Deck ****/

interface BC_ConsoleFns {
  print:        (...ArgList:unknown[]) => void
  println:      (...ArgList:unknown[]) => void
  clearConsole: () => void
}

interface BC_CardRef {
  __navType: string
  __id?:     string
  __name?:   string
  __index?:  number
}

//----------------------------------------------------------------------------//
//                            ScriptInstance                                   //
//----------------------------------------------------------------------------//

export class ScriptInstance {

/**** on — registers a message handler (called from within a script) ****/

  on (msg:string, fn:(...args:unknown[]) => unknown):void {
    this.#handlers.set(msg, fn)
  }

  #handlers = new Map<string, (...args:unknown[]) => unknown>()

/**** run — evaluates the script asynchronously; clears old handlers first ****/

  async run (script:string, Params:string[], Args:unknown[]):Promise<void> {
    this.#handlers.clear()
    if (! script?.trim()) { return }
    try {
      await (new Function(...Params, `return (async () => {\n${script}\n})()`))(...Args)
    } catch (Signal) {
      console.warn('[BrowserCard] script error:', Signal)
    }
  }

/**** dispatch — asynchronously invokes the named handler ****/

  async dispatch (msg:string, ...callArgs:unknown[]):Promise<boolean> {
    const Handler = this.#handlers.get(msg)
    if (Handler == null) { return false }
    try {
      await Handler(...callArgs)
      return true
    } catch (Signal) {
      console.warn(`[BrowserCard] handler "${msg}" error:`, Signal)
      return false
    }
  }

/**** renderResult — synchronously invokes the 'render' handler ****/

  renderResult ():unknown {
    const updateHandler = this.#handlers.get('update')
    if (updateHandler != null) {
      try { (updateHandler as () => void)() } catch (Signal) {
        console.warn('[BrowserCard] update handler error:', Signal)
      }
    }
    const Handler = this.#handlers.get('render')
    if (Handler == null) { return null }
    try { return Handler() } catch (Signal) {
      console.warn('[BrowserCard] render handler error:', Signal)
      return null
    }
  }

/**** after/every — timers which are cleared automatically on teardown ****/

  #Timeouts  = new Set<ReturnType<typeof setTimeout>>()
  #Intervals = new Set<ReturnType<typeof setInterval>>()

  after (ms:number, fn:() => void):ReturnType<typeof setTimeout> {
    const Id = setTimeout(() => { this.#Timeouts.delete(Id); fn() }, ms)
    this.#Timeouts.add(Id)
    return Id
  }

  every (ms:number, fn:() => void):ReturnType<typeof setInterval> {
    const Id = setInterval(fn, ms)
    this.#Intervals.add(Id)
    return Id
  }

/**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/

  async teardown ():Promise<void> {
    const Handler = this.#handlers.get('obsolete')
    this.#handlers.clear()       // must happen synchronously - a new script run
                                       // may already have registered handlers!
    const oldTimeouts  = [ ...this.#Timeouts  ]; this.#Timeouts .clear()
    const oldIntervals = [ ...this.#Intervals ]; this.#Intervals.clear()

    if (Handler != null) {
      try {
        await Handler()
      } catch (Signal) {
        console.warn('[BrowserCard] handler "obsolete" error:', Signal)
      }
    }

    oldTimeouts .forEach((Id) => clearTimeout(Id))
    oldIntervals.forEach((Id) => clearInterval(Id))
  }
}

/**** BehaviorAPI — named-parameter interface for internal behaviors ****/

interface BehaviorAPI {
  on:       ScriptInstance['on']
  me:       BC_WidgetProxy | null
  html:     typeof html
  dispatch: (msg:string, ...args:unknown[]) => void
}

type InternalBehaviorFn = (api:BehaviorAPI) => Promise<void>

const _InternalBehaviors = new Map<string, InternalBehaviorFn>()

/**** resolveBehaviorUrl — maps a name/path/URL to a loadable ES-module URL ****/

export function resolveBehaviorUrl (nameOrUrl:string, visualType:'deck'|'card'|'widget'):string {
  if (/^https?:\/\//i.test(nameOrUrl)) { return nameOrUrl }
  if (nameOrUrl.startsWith('/'))        { return window.location.origin + nameOrUrl }
  if (nameOrUrl.includes('/') || nameOrUrl.includes('.')) {
    return new URL(nameOrUrl, window.location.href).href
  }
  const folder = visualType === 'deck' ? 'decks' : visualType === 'card' ? 'cards' : 'widgets'
  return `https://rozek.github.io/browser-card/behaviors/${folder}/${nameOrUrl}.js`
}

/**** buildScriptParams — constructs Params/Args arrays for new Function ****/

export function buildScriptParams (
  Instance:   ScriptInstance,
  Context:    BC_ScriptContext,
  VisualType: 'deck' | 'card' | 'widget',
  Extra?:     Record<string, unknown>,
):{ Params:string[]; Args:unknown[] } {
  const boundOn     = Instance.on   .bind(Instance)
  const boundAfter  = Instance.after.bind(Instance)
  const boundEvery  = Instance.every.bind(Instance)
  const extraKeys   = Extra != null ? Object.keys(Extra)   : []
  const extraValues = Extra != null ? Object.values(Extra) : []

  const api:BehaviorAPI = {
    on:       boundOn,
    me:       Context.me as BC_WidgetProxy | null,
    html:     Context.html,
    dispatch: (Extra?.dispatch as (msg:string) => void) ?? (() => undefined),
  }

  const Params:string[] = [
    'on','after','every', ...Object.keys(Context), ...extraKeys, 'behaveLike'
  ]
  const Args:unknown[] = [
    boundOn, boundAfter, boundEvery,
    ...Object.values(Context), ...extraValues, null
  ]

  let behaviorLoaded = false
  async function behaveLike (nameOrUrl:string):Promise<void> {
    if (behaviorLoaded) { console.warn('[BrowserCard] behaveLike: only one behavior per Visual allowed'); return }
    behaviorLoaded = true

    const internal = _InternalBehaviors.get(nameOrUrl)
    if (internal != null) { await internal(api); return }

    const url = resolveBehaviorUrl(nameOrUrl, VisualType)
    const mod = await import(/* @vite-ignore */ url) as { default:(API:Indexable) => Promise<void> }
    if (typeof mod.default === 'function') {
      const API:Indexable = {}          // external behaviors receive the full
      Params.forEach((Name,Index) => {  // script context as a single object
        API[Name] = Args[Index]         // with named entries
      })
      await mod.default(API)
    }
  }

  Args[Args.length - 1] = behaveLike

  return { Params, Args }
}

/**** buildContext — creates the script context for a Visual ****/

export function buildContext (
  _Deck:       BC_Deck,
  Cards:        BC_Card[],
  me:           BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null,
  Navigate:     (t:BC_NavTarget) => void,
  onAnswer:     (message:string, buttons:string[], resolve:(Result:string) => void) => void,
  onAsk:        (prompt:string, defaultValue:string, resolve:(Result:string | null) => void) => void,
  ConsoleFns:   BC_ConsoleFns,
  CardIndexRef: { current:number },
  requestSave?: () => Promise<void> | void,
):BC_ScriptContext {
  function makeRef (navType:string, extra?:Partial<BC_CardRef>):BC_CardRef {
    return { __navType:navType, ...extra }
  }

  function resolveNav (target:unknown):BC_NavTarget {
    if (typeof target === 'string') { return { type:'card-name', name:target } }
    if (typeof target === 'number') { return { type:'card-index', index:target-1 } }
    if ((target == null) || (typeof target !== 'object')) { return { type:'next' } }
    const Ref = target as BC_CardRef
    switch (Ref.__navType) {
      case 'next':       return { type:'next'  }
      case 'prev':       return { type:'prev'  }
      case 'first':      return { type:'first' }
      case 'last':       return { type:'last'  }
      case 'card-name':  return { type:'card-name',  name:Ref.__name!  }
      case 'card-id':    return { type:'card-id',    id:Ref.__id!      }
      case 'card-index': return { type:'card-index', index:Ref.__index! }
      default:           return { type:'next'  }
    }
  }

  function widgetLookup (nameOrIndex:string|number):BC_WidgetProxy | null {
    const WidgetList:BC_WidgetProxy[] = (me as Indexable)?.Card?.WidgetList ?? []
    if (typeof nameOrIndex === 'string') {
      return WidgetList.find((Widget) => Widget.Name === nameOrIndex) ?? null
    }
    if (typeof nameOrIndex === 'number') {            // 1-based, like card()
      return WidgetList[nameOrIndex-1] ?? null
    }
    return null
  }

  return {
    go (target)   { Navigate(resolveNav(target)) },
    openURL (url) { window.open(url, '_blank', 'noopener,noreferrer') },

    answer (msg, ...btns) {
      return new Promise<string>(
        (resolve) => onAnswer(msg, btns.length ? btns : ['OK'], resolve)
      )
    },
    ask (prompt, def='') {
      return new Promise<string | null>(
        (resolve) => onAsk(prompt, def, resolve)
      )
    },

    Card (nameOrNum) {
      if (typeof nameOrNum === 'string') {
        return Cards.find((c) => c.Name === nameOrNum)
          ? makeRef('card-name', { __name:nameOrNum })
          : null
      }
      if (typeof nameOrNum === 'number') {
        return ((nameOrNum >= 1) && (nameOrNum <= Cards.length))
          ? makeRef('card-index', { __index:nameOrNum-1 })
          : null
      }
      return null
    },
    CardNumber () { return CardIndexRef.current+1 },
    CardCount ()  { return Cards.length },

    Widget: widgetLookup,

    async send (Target, msg, ...ArgList) {
      const Widget = (
        (typeof Target === 'string') || (typeof Target === 'number')
        ? widgetLookup(Target)
        : Target
      )
      const Instance = (Widget as Indexable)?.[$Script] as ScriptInstance | undefined
      if (Instance == null) { return false }
      return Instance.dispatch(msg, ...ArgList)
    },

    print:        ConsoleFns.print,
    println:      ConsoleFns.println,
    clearConsole: ConsoleFns.clearConsole,

    defineLocalBehavior (Name, Fn) {           // store readable source in the deck
      const Source = (typeof Fn === 'function' ? Fn.toString() : String(Fn ?? ''))
      ;(_Deck.localBehaviors ??= {})[Name] = Source
      return Source
    },
    localBehavior (Name) {                      // turn stored source into a data-URI
      const Source = _Deck.localBehaviors?.[Name]
      if (Source == null) throwError(
        'NoSuchBehavior: no local behavior named ' + quoted(Name) + ' has been defined'
      )
      return 'data:text/javascript;charset=utf-8,' +
        encodeURIComponent('export default ' + Source)
    },
    saveDeck () { return Promise.resolve(requestSave?.()) },

    me,
    my: me,                                  // "me", "my" and "I" are synonyms
    I:  me,
    nextCard:  makeRef('next'),
    prevCard:  makeRef('prev'),
    firstCard: makeRef('first'),
    lastCard:  makeRef('last'),
    html,                                    // intentionally lowercase (see BC_ScriptContext)
    preact: Preact,
  }
}

//----------------------------------------------------------------------------//
//                               demo deck                                   //
//----------------------------------------------------------------------------//

// the built-in default deck is the "BrowserCard-Pitch" demo
// (demos/BrowserCard-Pitch.json), embedded so the bundle stays self-contained.
// On embedding, the deck's relative asset paths are rewritten to canonical
// absolute URLs so they resolve no matter which page hosts the default deck
// (relative paths would otherwise resolve against the hosting page's directory):
//   "./behaviors/..." -> "https://rozek.github.io/browser-card/behaviors/..."
//                        (behaviors are served from the repo root)
//   "./img/..."       -> "https://rozek.github.io/browser-card/dist/img/..."
//                        (public/ assets are emitted into dist/)
const DemoDeckJSON = "{\"Id\":\"bc-deck-229\",\"Name\":\"BrowserCard-Pitch\",\"readOnly\":false,\"swipeToAdjacentCard\":true,\"Script\":\"\",\"Cards\":[{\"Id\":\"bc-card-230\",\"Name\":\"Card 1\",\"Color\":null,\"Alpha\":1,\"dontSearch\":false,\"Script\":\"\",\"Widgets\":[{\"Id\":\"bc-widget-231\",\"Name\":\"TitleView 2\",\"Number\":1,\"Type\":\"generic\",\"zIndex\":1,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,150,10,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')\",\"Configuration\":{},\"Value\":\"BrowserCard\"},{\"Id\":\"bc-widget-232\",\"Name\":\"Label 2\",\"Number\":2,\"Type\":\"generic\",\"zIndex\":2,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,360,50,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')\",\"Configuration\":{},\"Value\":\"Play with Code and Data directly in the Browser\"},{\"Id\":\"bc-widget-233\",\"Name\":\"StickyTextNote 2\",\"Number\":3,\"Type\":\"generic\",\"zIndex\":3,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,100,90,70],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/StickyTextNote.js')\",\"Configuration\":{},\"Value\":\"Hello, World!\"},{\"Id\":\"bc-widget-234\",\"Name\":\"TextView 2\",\"Number\":4,\"Type\":\"generic\",\"zIndex\":4,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[120,150,80,80],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"at first, it looks like yet another tool for \\\"sticky notes\\\", but...\"},{\"Id\":\"bc-widget-235\",\"Name\":\"TextView 3\",\"Number\":5,\"Type\":\"generic\",\"zIndex\":5,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,160,170,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"you can add arbitrary media, such as images...\"},{\"Id\":\"bc-widget-236\",\"Name\":\"Widget 2\",\"Number\":6,\"Type\":\"generic\",\"zIndex\":6,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[180,40,160,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')\",\"Configuration\":{\"Direction\":\"w\",\"clockwise\":true,\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-237\",\"Name\":\"ImageView 2\",\"Number\":7,\"Type\":\"generic\",\"zIndex\":7,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,100,230,100],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/ImageView.js')\",\"Configuration\":{\"scaling\":\"cover\",\"alignment\":\"center center\"},\"Value\":\"https://rozek.github.io/browser-card/dist/img/Mandelbrot_240x240.png\"},{\"Id\":\"bc-widget-238\",\"Name\":\"TextView 4\",\"Number\":8,\"Type\":\"generic\",\"zIndex\":8,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[120,160,290,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"...complete web pages...\"},{\"Id\":\"bc-widget-239\",\"Name\":\"Widget 3\",\"Number\":9,\"Type\":\"generic\",\"zIndex\":9,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[120,40,250,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')\",\"Configuration\":{\"Direction\":\"s\",\"clockwise\":true,\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-240\",\"Name\":\"TextView 5\",\"Number\":10,\"Type\":\"generic\",\"zIndex\":10,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[160,140,230,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"...dynamic content...\"},{\"Id\":\"bc-widget-241\",\"Name\":\"WebView 2\",\"Number\":11,\"Type\":\"generic\",\"zIndex\":11,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[10,330,350,240],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/WebView.js')\",\"Configuration\":{\"scaling\":\"cover\",\"alignment\":\"center center\"},\"Value\":\"https://www.rozek.de\"},{\"Id\":\"bc-widget-242\",\"Name\":\"Widget 4\",\"Number\":12,\"Type\":\"generic\",\"zIndex\":12,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[290,30,230,110],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"n\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-243\",\"Name\":\"SubtitleView 2\",\"Number\":13,\"Type\":\"generic\",\"zIndex\":13,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[270,100,200,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/SubtitleView.js')\\n\\non('ready', () => {\\n  const padded = (n) => String(n).padStart(2,'0')\\n  function updateClock () {\\n    const now = new Date()\\n    my.Value = (\\n      padded(now.getHours())   + ':' + \\n      padded(now.getMinutes()) + ':' + \\n      padded(now.getSeconds())\\n    )\\n  }\\n  updateClock()                          // show immediately, then keep current\\n  every(1000, updateClock)\\n})\",\"Configuration\":{},\"Value\":\"08:23:07\"},{\"Id\":\"bc-widget-244\",\"Name\":\"Widget 5\",\"Number\":14,\"Type\":\"generic\",\"zIndex\":14,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[300,60,160,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')\",\"Configuration\":{\"Direction\":\"e\",\"clockwise\":true,\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-245\",\"Name\":\"TextView 6\",\"Number\":15,\"Type\":\"generic\",\"zIndex\":15,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,170,140,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"...and even input controls!\"},{\"Id\":\"bc-widget-246\",\"Name\":\"TextlineInput 2\",\"Number\":16,\"Type\":\"generic\",\"zIndex\":16,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,170,180,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeTextlineInput.js')\\n\\nmy.Value = undefined\\n\\non('update', () => {\\n  my.Value = my.Card.QRCodeValue\\n})\\n\\non('change', (Value) => {\\n  my.Card.QRCodeValue = Value\\n})\\n\",\"Configuration\":{\"Placeholder\":\"(enter text for QR code)\"},\"Value\":\"\"},{\"Id\":\"bc-widget-247\",\"Name\":\"Widget 6\",\"Number\":17,\"Type\":\"generic\",\"zIndex\":17,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,30,220,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"s\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-248\",\"Name\":\"TextView 7\",\"Number\":18,\"Type\":\"generic\",\"zIndex\":18,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[400,160,220,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"Widgets automatically react on state changes\"},{\"Id\":\"bc-widget-249\",\"Name\":\"Widget 7\",\"Number\":19,\"Type\":\"generic\",\"zIndex\":19,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[550,50,180,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"e\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-250\",\"Name\":\"TextView 8\",\"Number\":20,\"Type\":\"generic\",\"zIndex\":20,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,210,280,120],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"Use scripting to freely experiment with code and data - a bit like a 2D REPL or like interactive computing notebooks (without the need for a server)\"},{\"Id\":\"bc-widget-251\",\"Name\":\"Widget 8\",\"Number\":21,\"Type\":\"generic\",\"zIndex\":21,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,30,400,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"s\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-252\",\"Name\":\"TextView 9\",\"Number\":22,\"Type\":\"generic\",\"zIndex\":22,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[400,140,400,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"Craft complete tools, if you like\"},{\"Id\":\"bc-widget-253\",\"Name\":\"TitleView 3\",\"Number\":23,\"Type\":\"generic\",\"zIndex\":23,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[360,250,470,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')\",\"Configuration\":{},\"Value\":\"Temperature Converter\"},{\"Id\":\"bc-widget-254\",\"Name\":\"Label 3\",\"Number\":24,\"Type\":\"generic\",\"zIndex\":24,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,100,510,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')\",\"Configuration\":{},\"Value\":\"°Celsius:\"},{\"Id\":\"bc-widget-255\",\"Name\":\"Label 4\",\"Number\":25,\"Type\":\"generic\",\"zIndex\":25,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[370,100,540,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')\",\"Configuration\":{},\"Value\":\"°Fahrenheit:\"},{\"Id\":\"bc-widget-256\",\"Name\":\"NumberInput 2\",\"Number\":26,\"Type\":\"generic\",\"zIndex\":26,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[470,120,510,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = my.Card.Temperature ?? 0\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = Value\\n})\",\"Configuration\":{},\"Value\":5},{\"Id\":\"bc-widget-257\",\"Name\":\"NumberInput 3\",\"Number\":27,\"Type\":\"generic\",\"zIndex\":27,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[470,120,540,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = (my.Card.Temperature ?? 0) * 9/5 + 32\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = (Value-32) * 5/9\\n})\",\"Configuration\":{},\"Value\":41},{\"Id\":\"bc-widget-258\",\"Name\":\"Widget\",\"Number\":28,\"Type\":\"generic\",\"zIndex\":28,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[610,80,480,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')\",\"Configuration\":{\"Direction\":\"n\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-259\",\"Name\":\"TextView 10\",\"Number\":29,\"Type\":\"generic\",\"zIndex\":29,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[590,200,380,100],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"Now export your work as a self-contained web page and BrowserCard serves as a low-code application generator!\"},{\"Id\":\"bc-widget-260\",\"Name\":\"Widget-2\",\"Number\":30,\"Type\":\"generic\",\"zIndex\":30,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[610,160,150,160],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/QRCodeView.js')\\n\\nconst DefaultValue = 'https://github.com/rozek/browser-card'\\n\\nmy.Value = DefaultValue\\n\\non('update', () => {\\n  const Value = my.Card.QRCodeValue\\n  my.Value = (Value == null) || (Value === '') ? DefaultValue : Value\\n})\\n\",\"Configuration\":{\"ErrorCorrection\":\"M\",\"Border\":4,\"Color\":\"#000000\",\"Background\":\"#ffffff\"},\"Value\":\"https://github.com/rozek/browser-card\"},{\"Id\":\"bc-widget-261\",\"Name\":\"Widget 9\",\"Number\":31,\"Type\":\"generic\",\"zIndex\":31,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[670,30,320,60],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"n\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}},{\"Id\":\"bc-widget-262\",\"Name\":\"HTMLView\",\"Number\":32,\"Type\":\"generic\",\"zIndex\":32,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[630,120,340,30],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/HTMLView.js')\",\"Configuration\":{},\"Value\":\"<span style=\\\"font-weight:bold; font-size:18px\\\">Have &nbsp; &nbsp; Fun!</span>\"},{\"Id\":\"bc-widget-263\",\"Name\":\"TextView 11\",\"Number\":33,\"Type\":\"generic\",\"zIndex\":33,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[530,260,30,100],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')\",\"Configuration\":{},\"Value\":\"BrowserCard started as a small test for Anthropic Fable 5 (while it was available for non-US citizens), but soon turned out to be quite useful - try yourself!\"},{\"Id\":\"bc-widget-264\",\"Name\":\"Widget 10\",\"Number\":34,\"Type\":\"generic\",\"zIndex\":34,\"Anchors\":[\"left-width\",\"top-height\"],\"Offsets\":[280,240,70,40],\"visible\":true,\"Script\":\"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')\",\"Configuration\":{\"Direction\":\"ne\",\"ArrowHeads\":\"end\",\"Color\":\"#000000\",\"Thickness\":2}}],\"Temperature\":5,\"QRCodeValue\":\"\"}],\"SnapToGrid\":true,\"CardWidth\":800,\"CardHeight\":600}"
const DemoDeck:BC_Deck = JSON.parse(DemoDeckJSON) as BC_Deck

  const pristineDemoDeckJSON = JSON.stringify(DemoDeck)   // for "Reset", since
                                          // the singleton is mutated when edited

//----------------------------------------------------------------------------//
//                          deck persistence                                  //
//----------------------------------------------------------------------------//

// decks are persisted in IndexedDB using "idb-keyval" as a thin key-value
// layer - one entry per deck, keyed by 'bc-deck:<name>'

  const DeckStore     = createStore('browser-card','decks')
  const DeckKeyPrefix = 'bc-deck:'

  export type BC_DeckInfo = { Key:string; Name:string }

/**** "remember last deck" - opt-in, just like the MCP "remember token" option ****/
/****  while enabled, the storage-key of the active deck is kept in localStorage  ****/
/****  and reopened on the next page load (if that deck still exists)             ****/

  const RememberDeckFlag = 'bc-remember-deck'
  const LastDeckKey      = 'bc-last-deck'

  export function deckShallBeRemembered ():boolean {
    try { return localStorage.getItem(RememberDeckFlag) === '1' } catch { return false }
  }

  export function rememberCurrentDeck (StorageKey:string):void {   // refreshes the pointer while enabled
    try {
      if (deckShallBeRemembered() && (StorageKey !== '')) {
        localStorage.setItem(LastDeckKey, StorageKey)
      }
    } catch { /* ignore */ }
  }

  export function setDeckRemembering (Enabled:boolean, StorageKey:string):void {
    try {
      if (Enabled) {
        localStorage.setItem(RememberDeckFlag, '1')
        if (StorageKey !== '') { localStorage.setItem(LastDeckKey, StorageKey) }
      } else {
        localStorage.removeItem(RememberDeckFlag)
        localStorage.removeItem(LastDeckKey)
      }
    } catch { /* ignore */ }
  }

/**** ValueIsWidgetJSON/CardJSON/Deck — light structural checks ****/

  export function ValueIsWidgetJSON (Value:any):boolean {
    return (
      ValueIsPlainObject(Value) &&
      ValueIsString(Value.Id) && ValueIsString(Value.Type) &&
      ValueIsAnchors(Value.Anchors) && ValueIsOffsets(Value.Offsets)
    )
  }

  export function ValueIsCardJSON (Value:any):boolean {
    return (
      ValueIsPlainObject(Value) &&
      ValueIsString(Value.Id) && ValueIsString(Value.Name) &&
      ValueIsArray(Value.Widgets) &&
      (Value.Widgets as any[]).every(ValueIsWidgetJSON)
    )
  }

  export function ValueIsDeck (Value:any):boolean {
    return (
      ValueIsPlainObject(Value) &&
      ValueIsString(Value.Name) &&
      ValueIsArray(Value.Cards) &&
      (Value.Cards as any[]).every(ValueIsCardJSON)
    )
  }

//----------------------------------------------------------------------------//
//                           clipboard support                                //
//----------------------------------------------------------------------------//

// cards and widgets are placed into the clipboard as JSON with BrowserCard-
// specific MIME types (the "web " prefix is required for custom formats).
// A plain text copy is always added as a fallback for other browsers

  const CardMIMEType   = 'web application/x-browsercard-card'
  const WidgetMIMEType = 'web application/x-browsercard-widget'

/**** writeToClipboard ****/

  async function writeToClipboard (
    MIMEType:string, Serialization:string
  ):Promise<boolean> {
    try {
    // the ClipboardItem KEY carries the "web " prefix, but the Blob itself
    // needs the bare MIME type (a type with spaces would be invalid)
      const bareMIMEType = MIMEType.replace(/^web /,'')
      const Item = new ClipboardItem({
        [MIMEType]:   new Blob([ Serialization ], { type:bareMIMEType }),
        'text/plain': new Blob([ Serialization ], { type:'text/plain' }),
      })
      await navigator.clipboard.write([ Item ])
      return true
    } catch (Signal) {
      console.warn('[BrowserCard] falling back to a plain text clipboard:', Signal)
    }

    try {                       // fallback for browsers without custom formats
      await navigator.clipboard.writeText(Serialization)
      return true
    } catch (Signal) {
      console.warn('[BrowserCard] could not write to the clipboard:', Signal)
      return false
    }
  }

/**** readFromClipboard — detects what the clipboard contains ****/

  async function readFromClipboard ():Promise<
    { Kind:'card' | 'widget'; Serialization:string } | null
  > {
    try {
      const ItemList = await navigator.clipboard.read()
      for (const Item of ItemList) {
        if (Item.types.includes(CardMIMEType)) {
          return { Kind:'card', Serialization:await (await Item.getType(CardMIMEType)).text() }
        }
        if (Item.types.includes(WidgetMIMEType)) {
          return { Kind:'widget', Serialization:await (await Item.getType(WidgetMIMEType)).text() }
        }
      }
    } catch (Signal) {
      console.warn('[BrowserCard] could not inspect the clipboard - trying plain text:', Signal)
    }

    try {                 // plain text fallback - the content type is inferred
      const Text      = (await navigator.clipboard.readText()).trim()
      const Candidate = JSON.parse(Text)
      const isWidgetArray = Array.isArray(Candidate) &&
        (Candidate.length > 0) && Candidate.every(ValueIsWidgetJSON)
      switch (true) {
        case ValueIsCardJSON(Candidate):   return { Kind:'card',   Serialization:Text }
        case ValueIsWidgetJSON(Candidate): return { Kind:'widget', Serialization:Text }
        case isWidgetArray:                return { Kind:'widget', Serialization:Text }
      }
    } catch (Signal) {
      console.warn('[BrowserCard] could not read from the clipboard:', Signal)
    }

    return null
  }

/**** adjustIdCounterFor — prevents id collisions after loading a deck ****/

  export function adjustIdCounterFor (Deck:BC_Deck):void {
    const consider = (Id:string | undefined):void => {
      if (Id == null) { return }
      const Match = /-(\d+)$/.exec(Id)
      if (Match != null) { IdCounter = Math.max(IdCounter, parseInt(Match[1],10)) }
    }
    consider(Deck.Id)
    Deck.Cards.forEach((Card) => {
      consider(Card.Id)
      Card.Widgets.forEach((Obj) => consider(Obj.Id))
    })
  }

//----------------------------------------------------------------------------//
//                            object rendering                                //
//----------------------------------------------------------------------------//

/**** visualPropsToCSS ****/

function visualPropsToCSS (v:BC_Visual):Record<string,string|number> {
  const css:Record<string,string|number> = {}

  if (v.FontFamily)        css['fontFamily']  = v.FontFamily
  if (v.FontSize  != null) css['fontSize']    = `${v.FontSize}px`
  if (v.FontWeight)        css['fontWeight']  = BC_FontWeightValues[v.FontWeight as keyof typeof BC_FontWeightValues]
  if (v.FontStyle)         css['fontStyle']   = v.FontStyle
  if (v.LineHeight != null) css['lineHeight'] = `${v.LineHeight}px`
  if (v.ForegroundColor)   css['color']       = v.ForegroundColor
  if (v.TextAlignment)     css['textAlign']   = v.TextAlignment
  if (v.Opacity != null)   css['opacity']     = v.Opacity
  if (v.Cursor)            css['cursor']      = v.Cursor

  if (v.TextDecoration?.isActive) {
    const td = v.TextDecoration
    let val = td.Line
    if (td.Style)          val += ` ${td.Style}`
    if (td.Color)          val += ` ${td.Color}`
    if (td.Thickness != null) val += ` ${td.Thickness}px`
    css['textDecoration'] = val
  }

  if (v.TextShadow?.isActive && v.TextShadow.Color !== 'transparent') {
    const ts = v.TextShadow
    css['textShadow'] = `${ts.xOffset}px ${ts.yOffset}px ${ts.BlurRadius}px ${ts.Color}`
  }

  if (v.hasBackground === false) {
    css['background'] = 'transparent'
  } else {
    if (v.BackgroundColor)   css['backgroundColor'] = v.BackgroundColor
    if (v.BackgroundTexture) {
      const bt = v.BackgroundTexture
      const sizeMap:Record<BC_BackgroundMode,string> = {
        'normal': 'auto', 'contain': 'contain', 'cover': 'cover',
        'fill': '100% 100%', 'tile': 'auto'
      }
      css['backgroundImage']    = `url(${bt.ImageURL})`
      css['backgroundSize']     = sizeMap[bt.Mode]
      css['backgroundRepeat']   = bt.Mode === 'tile' ? 'repeat' : 'no-repeat'
      css['backgroundPosition'] = `${bt.xOffset}px ${bt.yOffset}px`
    }
  }

  return css
}

/**** widgetPropsToCSS ****/

function widgetPropsToCSS (w:BC_Widget):Record<string,string> {
  const css:Record<string,string> = {}

  if (w.BorderWidths) {
    const [t,r,b,l] = w.BorderWidths
    css['borderWidth'] = `${t}px ${r}px ${b}px ${l}px`
  }
  if (w.BorderStyles) {
    const [t,r,b,l] = w.BorderStyles
    css['borderStyle'] = `${t} ${r} ${b} ${l}`
  }
  if (w.BorderColors) {
    const [t,r,b,l] = w.BorderColors
    css['borderColor'] = `${t} ${r} ${b} ${l}`
  }
  if (w.BorderRadii) {
    const [tl,tr,br,bl] = w.BorderRadii
    css['borderRadius'] = `${tl}px ${tr}px ${br}px ${bl}px`
  }
  if (w.BoxShadow?.isActive) {
    const s = w.BoxShadow
    css['boxShadow'] = `${s.xOffset}px ${s.yOffset}px ${s.BlurRadius}px ${s.SpreadRadius}px ${s.Color}`
  }

  return css
}

/**** resolveGeometry — compute pixel rect from Anchors + Offsets + container size ****/

export function resolveGeometry (
  Anchors:BC_Anchors, Offsets:BC_Offsets, containerW:number, containerH:number
):{ left:number; top:number; width:number; height:number } {
  let left = 0, width = 0, top = 0, height = 0

  switch (Anchors[0]) {
    case 'left-width':  left = Offsets[0]; width = Offsets[1]; break
    case 'left-right':  left = Offsets[0]; width = containerW - Offsets[0] - Offsets[1]; break
    case 'width-right': width = Offsets[0]; left = containerW - Offsets[0] - Offsets[1]; break
  }

  switch (Anchors[1]) {
    case 'top-height':    top = Offsets[2]; height = Offsets[3]; break
    case 'top-bottom':    top = Offsets[2]; height = containerH - Offsets[2] - Offsets[3]; break
    case 'height-bottom': height = Offsets[2]; top = containerH - Offsets[2] - Offsets[3]; break
  }

  return { left, top, width, height }
}

/**** computeOffsets — inverse of resolveGeometry: pixel values → Offsets ****/

export function computeOffsets (
  x:BC_Location, y:BC_Location, Width:BC_Dimension, Height:BC_Dimension,
  Anchors:BC_Anchors, containerW:number, containerH:number
):BC_Offsets {
  let h0 = 0, h1 = 0, v0 = 0, v1 = 0

  switch (Anchors[0]) {
    case 'left-width':  h0 = x;     h1 = Width; break
    case 'left-right':  h0 = x;     h1 = containerW - x - Width; break
    case 'width-right': h0 = Width; h1 = containerW - Width - x; break
  }

  switch (Anchors[1]) {
    case 'top-height':    v0 = y;      v1 = Height; break
    case 'top-bottom':    v0 = y;      v1 = containerH - y - Height; break
    case 'height-bottom': v0 = Height; v1 = containerH - Height - y; break
  }

  return [h0, h1, v0, v1]
}


/**** makeWidgetProxy ****/

export function makeWidgetProxy (
  Obj:         BC_Widget,
  SizeRef:     { current:{ W:number; H:number } },
  deckProxy:   BC_DeckProxy,
  cardProxy:   BC_CardProxy,
  forceUpdate: () => void,
):BC_WidgetProxy {
  let _own:Record<string,unknown> | null = null
  let _Script:unknown = null         // ScriptInstance of this widget, for send()
  let _View:Element | undefined      // the widget's wrapper DOM element, once mounted
  return new Proxy(Obj, {
    get (target, key) {
      if (key === $Script) { return _Script }
      if (key === $View)   { return _View }
      switch (key) {
        case 'own':    return (_own ??= {})
        case 'View':   return _View
        case 'Deck': return deckProxy
        case 'Card':   return cardProxy
        case 'x':      { const { left }   = resolveGeometry(target.Anchors, target.Offsets, SizeRef.current.W, SizeRef.current.H); return left   }
        case 'y':      { const { top }    = resolveGeometry(target.Anchors, target.Offsets, SizeRef.current.W, SizeRef.current.H); return top    }
        case 'Width':  { const { width }  = resolveGeometry(target.Anchors, target.Offsets, SizeRef.current.W, SizeRef.current.H); return width  }
        case 'Height': { const { height } = resolveGeometry(target.Anchors, target.Offsets, SizeRef.current.W, SizeRef.current.H); return height }
        case 'changeGeometryTo': return (
          newX?:BC_Location|null, newY?:BC_Location|null,
          newWidth?:BC_Dimension|null, newHeight?:BC_Dimension|null,
        ):BC_Offsets => {
          const { W, H } = SizeRef.current
          const { left: x, top: y, width: Width, height: Height } = resolveGeometry(target.Anchors, target.Offsets, W, H)
          const offsets = computeOffsets(newX ?? x, newY ?? y, newWidth ?? Width, newHeight ?? Height, target.Anchors, W, H)
          target.Offsets = offsets
          forceUpdate()
          return offsets
        }
        case 'rerender': return forceUpdate          // force a re-render of this widget
        default: return Reflect.get(target, key)
      }
    },
    set (target, key, value) {
      if (key === $Script) { _Script = value; return true }
      if (key === $View)   { _View = value as Element | undefined; return true }
      if (key === 'View')  { return true }              // me.View is read-only
      if (key === 'own')   { _own = value as Record<string,unknown>; return true }
      if (Object.is(Reflect.get(target, key), value)) { return true }
      Reflect.set(target, key, value)
      forceUpdate()
      return true
    },
  }) as BC_WidgetProxy
}

/**** makeCardProxy ****/

export function makeCardProxy (
  Card:          BC_Card,
  deckProxy:     BC_DeckProxy,
  widgetListRef: { current:BC_WidgetProxy[] },
  forceUpdate:   () => void,
):BC_CardProxy {
  let _own:Record<string,unknown> | null = null
  let _View:Element | undefined      // the card's DOM element (.bc-card-canvas)
  let proxy:BC_CardProxy
  proxy = new Proxy(Card, {
    get (target, key) {
      if (key === $View) { return _View }
      switch (key) {
        case 'own':        return (_own ??= {})
        case 'View':       return _View
        case 'Deck':     return deckProxy
        case 'Card':       return proxy
        case 'WidgetList': return widgetListRef.current
        case 'rerender':   return forceUpdate         // force a re-render of this card and its widgets
        default:           return Reflect.get(target, key)
      }
    },
    set (target, key, value) {
      if (key === $View) { _View = value as Element | undefined; return true }
      if (key === 'View') { return true }                // me.View is read-only
      if (key === 'own') { _own = value as Record<string,unknown>; return true }
      if (Object.is(Reflect.get(target, key), value)) { return true }
      Reflect.set(target, key, value)
      forceUpdate()
      return true
    },
  }) as BC_CardProxy
  return proxy
}

/**** makeDeckProxy ****/

export function makeDeckProxy (
  Deck:         BC_Deck,
  cardProxyRef: { current:BC_CardProxy | null },
  forceUpdate:  () => void,
):BC_DeckProxy {
  let _own:Record<string,unknown> | null = null
  let _View:Element | undefined      // the deck's DOM element (.bc-app)
  let _console           = ''
  let _consoleLineCount  = 0
  let _consoleCharCount  = 0
  let proxy:BC_DeckProxy
  proxy = new Proxy(Deck, {
    get (target, key) {
      if (key === $rerender)          { return forceUpdate }
      if (key === $View)              { return _View }
      if (key === $Console)           { return _console }
      if (key === $Console_LineCount) { return _consoleLineCount }
      if (key === $Console_CharCount) { return _consoleCharCount }
      switch (key) {
        case 'own':               return (_own ??= {})
        case 'View':              return _View
        case 'Deck':            return proxy
        case 'Card':              return cardProxyRef.current!
        case 'Console_LineLimit': return Reflect.get(target, key) ?? Default_LineLimit
        case 'Console_CharLimit': return Reflect.get(target, key) ?? Default_CharLimit
        default:                  return Reflect.get(target, key)
      }
    },
    set (target, key, value) {
      if (key === $View)            { _View = value as Element | undefined; return true }
      if (key === 'View')           { return true }     // me.View is read-only
      if (key === 'own')            { _own = value as Record<string,unknown>; return true }
      if (key === $Console)         { _console          = value as string; return true }
      if (key === $Console_LineCount) { _consoleLineCount = value as number; return true }
      if (key === $Console_CharCount) { _consoleCharCount = value as number; return true }
      if (Object.is(Reflect.get(target, key), value)) { return true }
      Reflect.set(target, key, value)
      forceUpdate()
      return true
    },
  }) as BC_DeckProxy
  return proxy
}

/**** RectStyle ****/

function RectStyle (Obj:BC_Widget, containerW:number, containerH:number) {
  const { left, top, width, height } = resolveGeometry(Obj.Anchors, Obj.Offsets, containerW, containerH)
  return {
    left, top, width, height,
    zIndex:  Obj.zIndex,
    display: Obj.visible ? undefined : 'none',
    ...visualPropsToCSS(Obj),
    ...widgetPropsToCSS(Obj),
  }
}

/**** arrowheadPoints — SVG polygon points string for a filled arrowhead ****/
//    (tx,ty) = tip; (dx,dy) = direction vector pointing toward the tip

function arrowheadPoints (
  tx:number, ty:number,
  dx:number, dy:number,
  ah:number, aw:number,
):string {
  const L = Math.sqrt(dx*dx + dy*dy)
  if (L < 0.001) { return '' }
  const ux = dx / L,  uy = dy / L
  const bx = tx - ah * ux             // base centre
  const by = ty - ah * uy
  return `${tx},${ty} ${bx - aw*uy},${by + aw*ux} ${bx + aw*uy},${by - aw*ux}`
}

/**** shapeContent — returns the inner content of a shape (no outer wrapper) ****/

function shapeContent (Obj:BC_Shape, W:number, H:number):unknown {
  const color = Obj.BorderColor ?? '#333'      // W,H = resolved widget dimensions
  const bw    = Obj.BorderWidth ?? 2
  const fill  = Obj.FillColor   ?? 'transparent'

  if (Obj.Variant === 'rectangle' || Obj.Variant === 'rounded-rectangle' || Obj.Variant === 'oval') {
    const radius = Obj.Variant === 'oval'              ? '50%'
                 : Obj.Variant === 'rounded-rectangle' ? `${Obj.CornerRadius ?? 12}px`
                 : undefined
    return html`
      <div style=${{ width:'100%', height:'100%', boxSizing:'border-box',
        background:fill, border:`${bw}px solid ${color}`, borderRadius:radius,
      }}></div>
    `
  }

  if (Obj.Variant === 'polygon') {
    const n      = Math.max(3, Obj.Sides ?? 6)
    const cx     = W / 2
    const cy     = H / 2
    const rx     = W / 2 - bw
    const ry     = H / 2 - bw
    const points = Array.from({ length: n }, (_:unknown, i:number) => {
      const angle = 2 * Math.PI * i / n - Math.PI / 2
      return `${cx + rx*Math.cos(angle)},${cy + ry*Math.sin(angle)}`
    }).join(' ')
    return html`
      <svg width="100%" height="100%" viewBox=${`0 0 ${W} ${H}`}>
        <polygon points=${points}
          fill=${fill} stroke=${color} strokeWidth=${bw} strokeLinejoin="round"/>
      </svg>
    `
  }

  // line / arc — arrowheads drawn as explicit polygons (shadow DOM safe)
  const hasStart = Obj.ArrowStart === true
  const hasEnd   = Obj.ArrowEnd   === true
  const ah       = Math.max(bw*4, 10)   // arrowhead length
  const aw       = ah * 0.5              // arrowhead half-width

  const lineProps: Record<string,unknown> = {
    stroke: color, strokeWidth: bw, fill: 'none', strokeLinecap: 'round',
  }

  if (Obj.Variant === 'line') {
    const startAH = hasStart ? html`<polygon
      points=${arrowheadPoints(0, 0, -W, -H, ah, aw)} fill=${color} stroke="none"/>` : null
    const endAH   = hasEnd   ? html`<polygon
      points=${arrowheadPoints(W, H,  W,  H, ah, aw)} fill=${color} stroke="none"/>` : null
    return html`
      <svg width="100%" height="100%" viewBox=${`0 0 ${W} ${H}`}>
        <line x1="0" y1="0" x2=${W} y2=${H} ...${lineProps}/>
        ${startAH}${endAH}
      </svg>
    `
  }

  // arc: quadratic bezier from (0,0) to (W,H)
  const curvature = Obj.Curvature ?? 0.4
  const cpx = W / 2 - curvature * H
  const cpy = H / 2 + curvature * W
  const startAH = hasStart ? html`<polygon
    points=${arrowheadPoints(0, 0, -cpx, -cpy, ah, aw)} fill=${color} stroke="none"/>` : null
  const endAH   = hasEnd   ? html`<polygon
    points=${arrowheadPoints(W, H, W-cpx, H-cpy, ah, aw)} fill=${color} stroke="none"/>` : null
  return html`
    <svg width="100%" height="100%" viewBox=${`0 0 ${W} ${H}`}>
      <path d=${`M 0 0 Q ${cpx} ${cpy} ${W} ${H}`} ...${lineProps}/>
      ${startAH}${endAH}
    </svg>
  `
}

/**** internal behaviors for intrinsic widget types ****/

_InternalBehaviors.set('button', async ({ on, me, html, dispatch }) => {
  const O = me as BC_Button
  function onClick ():void {
    if (
      (O.autoHilite === true) &&
      ((O.Variant === 'checkbox') || (O.Variant === 'radio'))
    ) { O.Hilite = ! O.Hilite }              // a radio group is up to the script
    dispatch('click')
  }
  on('render', () => {
    const Label = (              // "Value" takes precedence over the mere name
      (O.Value != null) && (O.Value !== '') ? O.Value : O.Name
    )
    return html`
      <button
        class=${`bc-btn s-${O.Variant ?? 'default'}${O.Hilite ? ' hilite' : ''}`}
        disabled=${! O.enabled}
        style=${{ width:'100%', height:'100%' }}
        onClick=${O.enabled ? onClick : undefined}
        title=${O.Name}
      >${O.showName ? Label : null}</button>
    `
  })
})

_InternalBehaviors.set('field', async ({ on, me, html }) => {
  const O = me as BC_Field
  on('render', () => {            // computed on every render to stay live while
    const scrollClass = O.scrolling ? ' scrollable' : ' no-scroll'   // designing
    const linesClass  = O.showLines  ? ' show-lines'  : ''
    const styleClass  = `bc-field s-${O.Variant ?? 'default'}${scrollClass}${linesClass}`
    const textStyle   = {
      fontSize:   O.FontSize   ?? 14,
      fontWeight: O.FontWeight ?? 'normal',
      textAlign:  O.TextAlign  ?? 'left',
      color:      O.Color      ?? '#111',
    }
    return (O.lockText
      ? html`
          <div class=${styleClass} style=${{ width:'100%', height:'100%', ...textStyle }}>${O.Value}</div>
        `
      : html`
          <textarea
            class=${styleClass}
            style=${{ ...textStyle, width:'100%', height:'100%', padding:'4px 6px' }}
            onInput=${(Event:Event) => {       // write the text back into the
              O.Value = (Event.target as HTMLTextAreaElement).value    // widget
            }}
          >${O.Value}</textarea>
        `
    )
  })
})

_InternalBehaviors.set('shape', async ({ on, me, html }) => {
  const O = me as BC_Shape
  on('render', () => {            // computed on every render to stay live while
    const W = ((O as unknown) as { Width:number }).Width   ?? 0      // designing
    const H = ((O as unknown) as { Height:number }).Height ?? 0
    return html`${shapeContent(O, W, H)}`
  })
})

_InternalBehaviors.set('picture', async ({ on, me, html }) => {
  const O = me as BC_Picture
  on('render', () => html`
    <img
      class=${'bc-picture s-' + (O.Variant ?? 'default')}
      src=${O.ImageData}
      alt=${O.Name}
      draggable=${false}
    />
  `)
})

// WidgetView must be a real Preact component (not a plain function call)
// so that hooks (useState, useRef, useEffect) work correctly inside it.

/**** WidgetView — unified lifecycle component for every BC object type ****/

function WidgetView ({
  Obj, containerW, containerH, makeContext,
  deckProxy, cardProxy, onWidgetProxy, onReady, onMessage,
}:{
  Obj:           BC_Widget
  containerW:    number
  containerH:    number
  makeContext:   (me:BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null) => BC_ScriptContext
  deckProxy:     BC_DeckProxy
  cardProxy:     BC_CardProxy
  onWidgetProxy: (id:string, proxy:BC_WidgetProxy) => void
  onReady:       (id:string) => void
  onMessage?:    (msg:string) => void
}) {
  const [, setTick]      = useState(0)
  const isRenderingRef   = useRef(false)
  const forceUpdate      = useCallback(() => { if (!isRenderingRef.current) { setTick((n) => n+1) } }, [])
  const instanceRef      = useRef<ScriptInstance | null>(null)
  if (instanceRef.current == null) { instanceRef.current = new ScriptInstance() }

  // SizeRef: current container dimensions for live geometry in proxy getters
  const SizeRef = useRef({ W: containerW, H: containerH })
  SizeRef.current = { W: containerW, H: containerH }

  // proxy created once at mount; wraps Obj descriptor reactively
  const proxyRef = useRef<BC_WidgetProxy | null>(null)
  if (proxyRef.current == null) {
    proxyRef.current = makeWidgetProxy(Obj, SizeRef, deckProxy, cardProxy, forceUpdate)
  }
  const proxy = proxyRef.current!

  // hands the wrapper DOM element to the proxy, reachable as "me.View" in scripts
  const viewRef = useCallback(
    (Element:Element | null) => { (proxy as Indexable)[$View] = Element ?? undefined }, [proxy]
  )

  const onReadyRef     = useRef(onReady)
  onReadyRef.current   = onReady
  const onMessageRef   = useRef(onMessage)
  onMessageRef.current = onMessage

  // context built once at mount; captures stable callbacks (navigate, dialogs)
  const ContextRef = useRef<BC_ScriptContext | null>(null)
  if (ContextRef.current == null) { ContextRef.current = makeContext(proxy) }

  // extra bindings: Configuration (custom-widget config) and dispatch
  const ExtraRef = useRef<Record<string, unknown> | undefined>(undefined)
  if (ExtraRef.current == null) {
    const inst = instanceRef.current!
    ExtraRef.current = {
      Configuration: Obj.Configuration ?? {},
      dispatch: (msg:string, ...args:unknown[]) => { void inst.dispatch(msg, ...args); onMessageRef.current?.(msg) },
    }
  }

  // for intrinsic types, prepend the matching behavior call before the user script
  const intrinsicTypes = new Set(['button', 'field', 'shape', 'picture'])
  const behaviorPrefix = intrinsicTypes.has(Obj.Type)
    ? `await behaveLike(${JSON.stringify(Obj.Type)})\n`
    : ''

  useEffect(() => {
    const inst = instanceRef.current!
    ExtraRef.current!.Configuration = Obj.Configuration ?? {}   // refresh on re-run
    const { Params, Args } = buildScriptParams(inst, ContextRef.current!, 'widget', ExtraRef.current)

    ;(proxy as Indexable)[$Script] = inst              // makes send() reach this widget
    onWidgetProxy(Obj.Id, proxy)

  // syntax-check the user script first - a broken script must not prevent the
  // intrinsic behavior from running (the widget would disappear otherwise)
    let userScript = Obj.Script ?? ''
    if (userScript.trim() !== '') {
      try {
        new Function(`return (async () => {\n${userScript}\n})()`)
      } catch (Signal) {
        console.warn('[BrowserCard] syntax error in script of widget ' + quoted(Obj.Name) + ':', Signal)
        userScript = ''
      }
    }

    const effectiveScript = behaviorPrefix + userScript
    inst.run(effectiveScript, Params, Args).then(async () => {
      forceUpdate()
      await inst.dispatch('ready')
      onReadyRef.current(Obj.Id)
    })

    return () => { void inst.teardown() }
  }, [Obj.Script, Obj.Configuration])

  if (! Obj.visible) { return null }

  const inst = instanceRef.current!
  isRenderingRef.current = true
  let renderSlot: unknown
  try { renderSlot = inst.renderResult() ?? null } finally { isRenderingRef.current = false }

  // shapes need overflow:visible for SVG content that extends beyond bounds
  // shapes and buttons must not clip: shapes draw SVG beyond their box
  // (arrowheads), buttons cast a box-shadow that lies outside their box
  const extraStyle = (
    (Obj.Type === 'shape') || (Obj.Type === 'button')
    ? { overflow:'visible' }
    : { overflow:'hidden' }
  )
  return html`
    <div
      ref=${viewRef}
      class=${`bc-widget${Obj.Type === 'shape' ? ' bc-shape' : ''}`}
      style=${{ ...RectStyle(Obj, containerW, containerH), ...extraStyle }}
    >
      ${renderSlot}
    </div>
  `
}

//----------------------------------------------------------------------------//
//                                edit mode                                   //
//----------------------------------------------------------------------------//

  const minWidgetSize = 8           // smallest width/height (in px) while resizing

  type BC_Box = { left:number; top:number; width:number; height:number }

  type BC_DragState = {
    PointerId:number
    Mode:     'move' | 'resize'
    Direction:string                  // '' or one of 'nw','n','ne','e','se','s','sw','w'
    startX:   number
    startY:   number
    GroupOrigin:BC_Box                // union bounding box of all dragged widgets
    Items:    { Obj:BC_Widget; Origin:BC_Box }[]   // every widget being dragged
    captured: boolean               // true once an undo snapshot was captured
  }

  type BC_ArrangeDirection = 'front' | 'forward' | 'backward' | 'back'

/**** placeholder image for freshly created pictures ****/

  const PicturePlaceholder = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120">' +
      '<rect width="160" height="120" fill="#e5e7eb"/>' +
      '<circle cx="55" cy="35" r="10" fill="#9ca3af"/>' +
      '<path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/>' +
    '</svg>'
  )

/**** uniqueNameIn — appends (or counts up) a counter until the name is unique ****/

  export function uniqueNameIn (
    BaseName:string, existingNames:Set<string>, Separator:string = ' '
  ):string {
    // if the base already ends with " n" or "-n", count that number up instead
    // of appending a further suffix; otherwise append "<Separator><Counter>"
    const Match = /^(.*?)([ -])(\d+)$/.exec(BaseName)
    let Stem:string, Sep:string, Counter:number
    if (Match != null) {
      Stem = Match[1]; Sep = Match[2]; Counter = parseInt(Match[3],10)
    } else {
      Stem = BaseName; Sep = Separator; Counter = 1
    }

    let Name = BaseName
    while (existingNames.has(Name)) { Counter += 1; Name = `${Stem}${Sep}${Counter}` }
    return Name
  }

/**** newWidgetOfType — creates a widget descriptor with sensible defaults ****/

  function newWidgetOfType (
    Type:BC_WidgetType, Card:BC_Card, CanvasW:number, CanvasH:number
  ):BC_Widget {
    const Defaults:Record<BC_WidgetType,{ BaseName:string; Width:number; Height:number }> = {
      'button':  { BaseName:'Button',  Width:140, Height:36 },
      'field':   { BaseName:'Field',   Width:200, Height:80 },
      'shape':   { BaseName:'Shape',   Width:140, Height:100 },
      'picture': { BaseName:'Picture', Width:160, Height:120 },
      'generic': { BaseName:'Widget',  Width:200, Height:120 },
    }
    const { BaseName, Width, Height } = Defaults[Type]

    const existingNames = new Set(Card.Widgets.map((Obj) => Obj.Name))
    const Name = uniqueNameIn(BaseName, existingNames, '-')

    const maxZIndex = Card.Widgets.reduce((max,Obj) => Math.max(max,Obj.zIndex), 0)

    const Widget:BC_Widget = {
      Id:newInternalId('widget'), Name:Name,
      Number:maxZIndex+1, Type:Type, zIndex:maxZIndex+1,
      Anchors:[ 'left-width','top-height' ],
      Offsets:[
        Math.round((CanvasW-Width)/2), Width,
        Math.round((CanvasH-Height)/2), Height
      ],
      visible:true, Script:'',
    }

    switch (Type) {
      case 'button':
        Object.assign(Widget, {
          Variant:'rounded-rect', showName:true, autoHilite:true,
          enabled:true, sharedHilite:false, Value:'',
        })
        break
      case 'field':
        Object.assign(Widget, {
          Variant:'opaque', lockText:false, scrolling:false, showLines:false,
          dontSearch:false, sharedText:false, Value:'Value', FontSize:14,
        })
        break
      case 'shape':
        Object.assign(Widget, {
          Variant:'rectangle', FillColor:'#dbeafe', BorderColor:'#3b82f6',
          BorderWidth:2,
        })
        break
      case 'picture':
        Object.assign(Widget, {
          Variant:'scale-aspect-fit', autoHilite:false,
          ImageData:PicturePlaceholder, actualWidth:Width, actualHeight:Height,
        })
        break
      default:                                                       // 'generic'
        Object.assign(Widget, {
          Configuration:{},
          Script:(
            "on('render', () => html`\n" +
            "  <div style=${{\n" +
            "    display:'flex', alignItems:'center', justifyContent:'center',\n" +
            "    width:'100%', height:'100%', background:'#fff',\n" +
            "    border:'2px dashed #1d6fd8', borderRadius:'8px', color:'#1d6fd8',\n" +
            "  }}>new Widget</div>\n" +
            "`)"
          ),
        })
    }

    return Widget
  }

/**** EditLayer — selection and PositionTool for the edit mode ****/

  function EditLayer ({
    Objects, CanvasW, CanvasH, Scale, selectedIds, onSelect, onSelectMany, onEdited,
    Grid = { isActive:false, Width:10, Height:10 }, onBeforeEdit,
  }:{
    Objects:     BC_Widget[]
    CanvasW:     number
    CanvasH:     number
    Scale:       number
    selectedIds: string[]
    onSelect:    (Id:string | null, additive:boolean) => void
    onSelectMany:(Ids:string[], additive:boolean) => void
    onEdited:    () => void
    Grid?:       BC_Grid
    onBeforeEdit?:() => void
  }) {
    const LayerRef   = useRef<HTMLDivElement | null>(null)
    const DragRef    = useRef<BC_DragState | null>(null)
    const MarqueeRef = useRef<null | {
      PointerId:number; x0:number; y0:number; additive:boolean
      moved:boolean; box:BC_Box
    }>(null)
    const [Marquee, setMarquee] = useState<BC_Box | null>(null)

  /**** unionBox — bounding box enclosing several geometries ****/

    function unionBox (Boxes:BC_Box[]):BC_Box {
      const L  = Math.min(...Boxes.map((B) => B.left))
      const T  = Math.min(...Boxes.map((B) => B.top))
      const R  = Math.max(...Boxes.map((B) => B.left + B.width))
      const Bt = Math.max(...Boxes.map((B) => B.top  + B.height))
      return { left:L, top:T, width:R-L, height:Bt-T }
    }

  /**** beginDrag — moves or resizes one or several widgets together ****/

    function beginDrag (
      Event:PointerEvent, Mode:'move' | 'resize', Direction:string, DragObjs:BC_Widget[]
    ):void {
      if (DragObjs.length === 0) { return }
      Event.stopPropagation(); Event.preventDefault()
      ;(Event.currentTarget as HTMLElement).setPointerCapture(Event.pointerId)
      const Items = DragObjs.map((Obj) => ({
        Obj, Origin:resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH),
      }))
      DragRef.current = {
        PointerId:Event.pointerId, Mode, Direction,
        startX:Event.clientX, startY:Event.clientY,
        GroupOrigin:unionBox(Items.map((I) => I.Origin)),
        Items, captured:false,
      }
    }

  /**** applyDrag — the handle offset is applied to every dragged widget ****/

    function applyDrag (Event:PointerEvent):void {
      const Drag = DragRef.current
      if ((Drag == null) || (Event.pointerId !== Drag.PointerId)) { return }

      if (! Drag.captured) {     // one undo snapshot per actual drag gesture
        Drag.captured = true
        onBeforeEdit?.()
      }

      let dx = (Event.clientX-Drag.startX)/Scale
      let dy = (Event.clientY-Drag.startY)/Scale
      const G = Drag.GroupOrigin

      if (Drag.Mode === 'move') {
        if (Grid.isActive) {            // snap the group as a whole, not per widget
          dx = Math.round((G.left+dx)/Grid.Width) *Grid.Width  - G.left
          dy = Math.round((G.top +dy)/Grid.Height)*Grid.Height - G.top
        }
        for (const { Obj, Origin } of Drag.Items) {
          Obj.Offsets = computeOffsets(
            Origin.left+dx, Origin.top+dy, Origin.width, Origin.height,
            Obj.Anchors, CanvasW, CanvasH
          )
        }
      } else {
        const D = Drag.Direction
        if (Grid.isActive) {            // snap the moving group edge, derive the delta
          if (D.includes('w')) { dx = Math.round((G.left+dx)/Grid.Width)*Grid.Width - G.left }
          if (D.includes('e')) { dx = Math.round((G.left+G.width+dx)/Grid.Width)*Grid.Width - (G.left+G.width) }
          if (D.includes('n')) { dy = Math.round((G.top+dy)/Grid.Height)*Grid.Height - G.top }
          if (D.includes('s')) { dy = Math.round((G.top+G.height+dy)/Grid.Height)*Grid.Height - (G.top+G.height) }
        }
        for (const { Obj, Origin } of Drag.Items) {
          let { left,top,width,height } = Origin

          if (D.includes('w')) { left += dx; width  -= dx }
          if (D.includes('e')) {             width  += dx }
          if (D.includes('n')) { top  += dy; height -= dy }
          if (D.includes('s')) {             height += dy }

          if (width < minWidgetSize) {                // clamp each widget on its own
            if (D.includes('w')) { left = Origin.left + Origin.width - minWidgetSize }
            width = minWidgetSize
          }
          if (height < minWidgetSize) {
            if (D.includes('n')) { top = Origin.top + Origin.height - minWidgetSize }
            height = minWidgetSize
          }

          Obj.Offsets = computeOffsets(left, top, width, height, Obj.Anchors, CanvasW, CanvasH)
        }
      }
      onEdited()
    }

  /**** endDrag ****/

    function endDrag (Event:PointerEvent):void {
      const Drag = DragRef.current
      if ((Drag == null) || (Event.pointerId !== Drag.PointerId)) { return }
      ;(Event.currentTarget as HTMLElement).releasePointerCapture(Event.pointerId)
      DragRef.current = null
    }

  /**** marquee (rubber-band) selection on the empty canvas ****/

    function localPoint (Event:PointerEvent):{ x:number; y:number } | null {
      const Layer = LayerRef.current
      if (Layer == null) { return null }
      const Rect = Layer.getBoundingClientRect()
      return { x:(Event.clientX-Rect.left)/Scale, y:(Event.clientY-Rect.top)/Scale }
    }

    function beginMarquee (Event:PointerEvent):void {
      if (Event.button !== 0) { return }
      const P = localPoint(Event)
      if (P == null) { return }
      ;(Event.currentTarget as HTMLElement).setPointerCapture(Event.pointerId)
      MarqueeRef.current = {
        PointerId:Event.pointerId, x0:P.x, y0:P.y,
        additive:Event.shiftKey || Event.metaKey,
        moved:false, box:{ left:P.x, top:P.y, width:0, height:0 },
      }
    }

    function applyMarquee (Event:PointerEvent):void {
      const M = MarqueeRef.current
      if ((M == null) || (Event.pointerId !== M.PointerId)) { return }
      const P = localPoint(Event)
      if (P == null) { return }
      const Box:BC_Box = {
        left:Math.min(M.x0,P.x), top:Math.min(M.y0,P.y),
        width:Math.abs(P.x-M.x0), height:Math.abs(P.y-M.y0),
      }
      if ((Box.width > 3) || (Box.height > 3)) { M.moved = true }
      M.box = Box
      setMarquee(Box)
    }

    function endMarquee (Event:PointerEvent):void {
      const M = MarqueeRef.current
      if ((M == null) || (Event.pointerId !== M.PointerId)) { return }
      ;(Event.currentTarget as HTMLElement).releasePointerCapture(Event.pointerId)
      MarqueeRef.current = null
      setMarquee(null)

      if (! M.moved) {                            // a plain click on the empty canvas
        if (! M.additive) { onSelect(null, false) }
        return
      }

      const Box  = M.box
      const Hits = Objects.filter((Obj) => {      // overlap test (intersection)
        const B = resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)
        return ! (
          (B.left > Box.left+Box.width) || (B.left+B.width < Box.left) ||
          (B.top  > Box.top+Box.height) || (B.top+B.height < Box.top)
        )
      }).map((Obj) => Obj.Id)
      onSelectMany(Hits, M.additive)
    }

  /**** selection frames and resize handles ****/

    const selectedObjs = Objects.filter((Obj) => selectedIds.includes(Obj.Id))
    const HandleSize   = Math.max(6, 8/Scale)
    const HandleDirs   = [ 'nw','n','ne','e','se','s','sw','w' ]
    const GroupBox     = (selectedObjs.length > 0)
      ? unionBox(selectedObjs.map((Obj) => resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)))
      : null

    function HandleStyle (Direction:string, R:{ width:number; height:number }) {
      return {
        width:HandleSize, height:HandleSize, cursor:Direction + '-resize',
        left:(Direction.includes('w') ? 0 : Direction.includes('e') ? R.width  : R.width/2)  - HandleSize/2,
        top: (Direction.includes('n') ? 0 : Direction.includes('s') ? R.height : R.height/2) - HandleSize/2,
      }
    }

    const GridStyle = (Grid.isActive
      ? {
          backgroundImage:'radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)',
          backgroundSize: `${Grid.Width}px ${Grid.Height}px`,
        }
      : {}
    )

    return html`
      <div class="bc-edit-layer" ref=${LayerRef} style=${GridStyle}
        onPointerDown=${beginMarquee}
        onPointerMove=${applyMarquee}
        onPointerUp=${endMarquee}
        onContextMenu=${(e:Event) => e.preventDefault()}>
        ${Objects.map((Obj) => {
          const R = resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)
          return html`
            <div key=${Obj.Id}
              class=${`bc-edit-hit${Obj.visible ? '' : ' invisible'}`}
              style=${{ left:R.left, top:R.top, width:R.width, height:R.height, zIndex:Obj.zIndex }}
              onPointerDown=${(Event:PointerEvent) => {
                Event.stopPropagation()
                const additive = Event.shiftKey || Event.metaKey
                if (additive) { onSelect(Obj.Id, true); return }
                if (selectedIds.includes(Obj.Id)) {       // drag the whole selection
                  beginDrag(Event, 'move', '', Objects.filter((O) => selectedIds.includes(O.Id)))
                } else {                                   // select only this, then drag
                  onSelect(Obj.Id, false)
                  beginDrag(Event, 'move', '', [ Obj ])
                }
              }}
              onPointerMove=${applyDrag}
              onPointerUp=${endDrag}
              onContextMenu=${(e:Event) => e.preventDefault()}
            ></div>
          `
        })}
        ${(selectedObjs.length > 1) && selectedObjs.map((Obj) => {
          const R = resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)
          return html`
            <div key=${'member:'+Obj.Id} class="bc-selection-member"
              style=${{ left:R.left, top:R.top, width:R.width, height:R.height }}></div>
          `
        })}
        ${(GroupBox != null) && html`
          <div class="bc-selection-frame"
            style=${{ left:GroupBox.left, top:GroupBox.top, width:GroupBox.width, height:GroupBox.height }}>
            ${HandleDirs.map((Direction) => html`
              <div key=${Direction} class="bc-handle" style=${HandleStyle(Direction,GroupBox)}
                onPointerDown=${(Event:PointerEvent) => beginDrag(Event, 'resize', Direction, selectedObjs)}
                onPointerMove=${applyDrag}
                onPointerUp=${endDrag}
                onContextMenu=${(e:Event) => e.preventDefault()}
              ></div>
            `)}
          </div>
        `}
        ${(Marquee != null) && html`
          <div class="bc-marquee"
            style=${{ left:Marquee.left, top:Marquee.top, width:Marquee.width, height:Marquee.height }}></div>
        `}
      </div>
    `
  }

/**** EditorWindow — modal, draggable and resizable editor for multi-line ****/
/****                properties such as "Value", "Script" or "Configuration" ****/

  type BC_EditorState = {
    Title:   string
    Value:   string
    onCommit:(Value:string) => void
  }

  function EditorWindow ({
    State, onClose,
  }:{
    State:  BC_EditorState
    onClose:() => void
  }) {
    const [Geometry, setGeometry] = useState(() => ({
      x:Math.max(8, Math.round((window.innerWidth -560)/2)),
      y:Math.max(8, Math.round((window.innerHeight-420)/2)),
      Width:560, Height:420,
    }))
    const ValueRef = useRef(State.Value)
    const DragRef  = useRef<null | {
      PointerId:number
      Mode:     'move' | 'resize'
      startX:   number
      startY:   number
      Origin:   { x:number; y:number; Width:number; Height:number }
    }>(null)

  /**** window dragging and resizing ****/

    function beginDrag (Event:PointerEvent, Mode:'move' | 'resize'):void {
      Event.stopPropagation(); Event.preventDefault()
      ;(Event.currentTarget as HTMLElement).setPointerCapture(Event.pointerId)
      DragRef.current = {
        PointerId:Event.pointerId, Mode,
        startX:Event.clientX, startY:Event.clientY,
        Origin:{ ...Geometry },
      }
    }

    function applyDrag (Event:PointerEvent):void {
      const Drag = DragRef.current
      if ((Drag == null) || (Event.pointerId !== Drag.PointerId)) { return }

      const dx = Event.clientX-Drag.startX
      const dy = Event.clientY-Drag.startY

      if (Drag.Mode === 'move') {
        setGeometry((prev) => ({
          ...prev,
          x:Math.max(0, Drag.Origin.x+dx),
          y:Math.max(0, Drag.Origin.y+dy),
        }))
      } else {
        setGeometry((prev) => ({
          ...prev,
          Width: Math.max(300, Drag.Origin.Width +dx),
          Height:Math.max(200, Drag.Origin.Height+dy),
        }))
      }
    }

    function endDrag (Event:PointerEvent):void {
      const Drag = DragRef.current
      if ((Drag == null) || (Event.pointerId !== Drag.PointerId)) { return }
      ;(Event.currentTarget as HTMLElement).releasePointerCapture(Event.pointerId)
      DragRef.current = null
    }

  /**** keyboard shortcuts (capture phase, to bypass the Deck's handler) ****/

    function commit ():void { State.onCommit(ValueRef.current); onClose() }

    useEffect(() => {
      function onKey (Event:KeyboardEvent):void {
        if (Event.key === 'Escape') {
          Event.stopPropagation(); onClose()
        }
        if ((Event.key === 'Enter') && (Event.metaKey || Event.ctrlKey)) {
          Event.stopPropagation(); commit()
        }
      }
      window.addEventListener('keydown', onKey, true)
      return () => window.removeEventListener('keydown', onKey, true)
    }, [])

    return html`
      <div class="bc-editor-backdrop"></div>
      <div class="bc-editor-window"
        style=${{ left:Geometry.x, top:Geometry.y, width:Geometry.Width, height:Geometry.Height }}>
        <div class="bc-editor-header"
          onPointerDown=${(Event:PointerEvent) => beginDrag(Event,'move')}
          onPointerMove=${applyDrag}
          onPointerUp=${endDrag}
          onContextMenu=${(e:Event) => e.preventDefault()}
        >${State.Title}</div>
        <textarea class="bc-editor-textarea" spellcheck=${false}
          ref=${(el:HTMLTextAreaElement | null) => {
            if ((el != null) && (el.dataset.focused == null)) {
              el.dataset.focused = 'true'; el.focus()
            }
          }}
          defaultValue=${State.Value}
          onInput=${(Event:Event) => {
            ValueRef.current = (Event.target as HTMLTextAreaElement).value
          }}
        ></textarea>
        <div class="bc-editor-footer">
          <span class="bc-editor-hint">Esc = Cancel · Ctrl/Cmd+Enter = OK</span>
          <button class="bc-dialog-btn secondary" onClick=${onClose}>Cancel</button>
          <button class="bc-dialog-btn primary"   onClick=${commit}>OK</button>
        </div>
        <div class="bc-editor-resizer"
          onPointerDown=${(Event:PointerEvent) => beginDrag(Event,'resize')}
          onPointerMove=${applyDrag}
          onPointerUp=${endDrag}
          onContextMenu=${(e:Event) => e.preventDefault()}
        ></div>
      </div>
    `
  }

/**** PropertiesPanel — inspects and edits the selected widget ****/

  function PropertiesPanel ({
    Widget, SelectedCount = 0, CanvasW, CanvasH, onEdited,
    CardNames = [], CardIndex = 0, onDelete, onReorder, onMoveTo,
    Card = null, Deck = null, onOpenEditor, onBeforeEdit, onCopy,
  }:{
    Widget:   BC_Widget | null
    SelectedCount?:number
    CanvasW:  number
    CanvasH:  number
    onEdited: () => void
    CardNames?:string[]
    CardIndex?:number
    onDelete?: () => void
    onReorder?:(Direction:BC_ArrangeDirection) => void
    onMoveTo?: (CardIndex:number) => void
    Card?:    BC_Card | null
    Deck?:    BC_Deck | null
    onOpenEditor?:(Title:string, Value:string, onCommit:(Value:string) => void) => void
    onBeforeEdit?:(CoalescingKey:string) => void
    onCopy?:  () => void
  }) {
    if (Widget == null) {

    /**** multiple widgets selected — group actions only, no joint properties ****/

      if (SelectedCount > 1) {
        return html`
          <div class="bc-props-panel">
            <div class="bc-props-title">${SelectedCount} widgets selected</div>
            <div class="bc-props-subtitle">multiple selection</div>
            <div class="bc-props-hint">
              select a single widget to inspect and edit its properties
            </div>

            <div class="bc-props-section">Arrange</div>
            <div class="bc-props-row">
              <label>Order</label>
              <button class="bc-props-btn" title="to back"       onClick=${() => onReorder?.('back')}>⤓</button>
              <button class="bc-props-btn" title="send backward" onClick=${() => onReorder?.('backward')}>↓</button>
              <button class="bc-props-btn" title="bring forward" onClick=${() => onReorder?.('forward')}>↑</button>
              <button class="bc-props-btn" title="to front"      onClick=${() => onReorder?.('front')}>⤒</button>
            </div>
            <div class="bc-props-row">
              <label>Card</label>
              <select value=${String(CardIndex)}
                onChange=${(Event:Event) => onMoveTo?.(parseInt((Event.target as HTMLSelectElement).value,10))}>
                ${CardNames.map((Name,i) => html`<option key=${i} value=${String(i)}>${Name}</option>`)}
              </select>
            </div>

            <button class="bc-props-btn copy"   onClick=${onCopy}>Copy Widgets</button>
            <button class="bc-props-btn delete" onClick=${onDelete}>Delete Widgets</button>
          </div>
        `
      }

      if (Card == null) {
        return html`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        `
      }

    /**** without a selection, the panel shows the card's own properties ****/

      function updateCard (Key:string, Value:unknown):void {
        onBeforeEdit?.(`card:${Card!.Id}:${Key}`)
        ;(Card as Indexable)[Key] = Value
        onEdited()
      }

      function updateDeck (Key:string, Value:unknown):void {
        if (Deck == null) { return }
        onBeforeEdit?.(`deck:${Key}`)
        ;(Deck as Indexable)[Key] = Value
        onEdited()
      }

      return html`
        <div class="bc-props-panel">
          <div class="bc-props-title">${Card.Name}</div>
          <div class="bc-props-subtitle">card · ${Card.Id}</div>
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${Card.Name}
              onInput=${(Event:Event) => updateCard('Name', (Event.target as HTMLInputElement).value)}/>
          </div>
          ${ColorAlphaRow('Color', Card.Color ?? '#ffffff00', (Color) => updateCard('Color', Color))}
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${! Card.dontSearch}
              onChange=${(Event:Event) => updateCard('dontSearch', ! (Event.target as HTMLInputElement).checked)}/>
          </div>

          ${(Deck != null) && html`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${Deck.CardWidth ?? 800}
                onInput=${(Event:Event) => {
                  const newValue = parseFloat((Event.target as HTMLInputElement).value)
                  if (isFinite(newValue) && (newValue >= 50)) { updateDeck('CardWidth', newValue) }
                }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${Deck.CardHeight ?? 600}
                onInput=${(Event:Event) => {
                  const newValue = parseFloat((Event.target as HTMLInputElement).value)
                  if (isFinite(newValue) && (newValue >= 50)) { updateDeck('CardHeight', newValue) }
                }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${Deck.SnapToGrid === true}
                onChange=${(Event:Event) => updateDeck('SnapToGrid', (Event.target as HTMLInputElement).checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${Deck.GridWidth ?? 10}
                onInput=${(Event:Event) => {
                  const newValue = parseFloat((Event.target as HTMLInputElement).value)
                  if (isFinite(newValue) && (newValue >= 1)) { updateDeck('GridWidth', newValue) }
                }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${Deck.GridHeight ?? 10}
                onInput=${(Event:Event) => {
                  const newValue = parseFloat((Event.target as HTMLInputElement).value)
                  if (isFinite(newValue) && (newValue >= 1)) { updateDeck('GridHeight', newValue) }
                }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${(onOpenEditor != null) && html`
                  <button class="bc-props-expand" title="open in editor window"
                    onClick=${() => onOpenEditor(
                      `Deck "${Deck!.Name}" - Script`, Deck!.Script ?? '',
                      (Value) => updateDeck('Script',Value)
                    )}>⤢</button>
                `}
              </div>
              <textarea rows="10" spellcheck=${false} defaultValue=${Deck!.Script ?? ''}
                onChange=${(Event:Event) => updateDeck('Script', (Event.target as HTMLTextAreaElement).value)}
              ></textarea>
              <div class="bc-props-hint">applied when the field loses focus</div>
            </div>
          `}

          <div class="bc-props-section">Script</div>
          <div class="bc-props-row column">
            <div class="bc-props-rowheader">
              <label>Script</label>
              ${(onOpenEditor != null) && html`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => onOpenEditor(
                    `Card "${Card.Name}" - Script`, Card.Script ?? '',
                    (Value) => updateCard('Script',Value)
                  )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${false} defaultValue=${Card.Script ?? ''}
              onChange=${(Event:Event) => updateCard('Script', (Event.target as HTMLTextAreaElement).value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `
    }

    const Geometry = resolveGeometry(Widget.Anchors, Widget.Offsets, CanvasW, CanvasH)

  /**** update — writes a property and triggers a re-render ****/

    function update (Key:string, Value:unknown):void {
      onBeforeEdit?.(`prop:${Widget!.Id}:${Key}`)
      ;(Widget as Indexable)[Key] = Value
      onEdited()
    }

  /**** updateGeometry — partial pixel geometry update ****/

    function updateGeometry (
      x?:number, y?:number, Width?:number, Height?:number
    ):void {
      onBeforeEdit?.(`geo:${Widget!.Id}`)
      Widget!.Offsets = computeOffsets(
        x ?? Geometry.left, y ?? Geometry.top,
        Width ?? Geometry.width, Height ?? Geometry.height,
        Widget!.Anchors, CanvasW, CanvasH
      )
      onEdited()
    }

  /**** updateAnchors — switches anchors but keeps the pixel geometry ****/

    function updateAnchors (Index:0|1, Value:string):void {
      onBeforeEdit?.(`anchors:${Widget!.Id}`)
      const newAnchors = [ ...Widget!.Anchors ] as BC_Anchors
        newAnchors[Index] = Value as BC_horizontalAnchors & BC_verticalAnchors
      Widget!.Anchors = newAnchors
      Widget!.Offsets = computeOffsets(
        Geometry.left, Geometry.top, Geometry.width, Geometry.height,
        newAnchors, CanvasW, CanvasH
      )
      onEdited()
    }

  /**** input rows ****/

    function NumberInput (Value:number, Setter:(Value:number) => void) {
      return html`<input type="number" value=${Math.round(Value*100)/100}
        onInput=${(Event:Event) => {
          const newValue = parseFloat((Event.target as HTMLInputElement).value)
          if (isFinite(newValue)) { Setter(newValue) }
        }}/>`
    }

    function TextlineRow (Label:string, Key:string) {
      return html`<div class="bc-props-row">
        <label>${Label}</label>
        <input type="text" value=${(Widget as Indexable)[Key] ?? ''}
          onInput=${(Event:Event) => update(Key, (Event.target as HTMLInputElement).value)}/>
      </div>`
    }

    function NumberRow (Label:string, Key:string, Fallback:number = 0) {
      return html`<div class="bc-props-row">
        <label>${Label}</label>
        ${NumberInput(
          ((Widget as Indexable)[Key] as number) ?? Fallback,
          (Value) => update(Key,Value)
        )}
      </div>`
    }

    function CheckboxRow (Label:string, Key:string) {
      return html`<div class="bc-props-row">
        <label>${Label}</label>
        <input type="checkbox" checked=${Boolean((Widget as Indexable)[Key])}
          onChange=${(Event:Event) => update(Key, (Event.target as HTMLInputElement).checked)}/>
      </div>`
    }

    function DropDownRow (Label:string, Key:string, ValueList:string[]) {
      return html`<div class="bc-props-row">
        <label>${Label}</label>
        <select value=${(Widget as Indexable)[Key] ?? ValueList[0]}
          onChange=${(Event:Event) => update(Key, (Event.target as HTMLSelectElement).value)}>
          ${ValueList.map((Value) => html`<option key=${Value} value=${Value}>${Value}</option>`)}
        </select>
      </div>`
    }

    function ColorRow (Label:string, Key:string, Fallback:string) {
      const Value = ((Widget as Indexable)[Key] as string) ?? Fallback
      return ColorAlphaRow(Label, Value, (Color) => update(Key, Color))
    }

    const TypeLabel = (              // user-facing name of the widget's type
      Widget.Type === 'generic' ? 'custom widget' : Widget.Type
    )

    function RowHeader (Label:string, currentValue:() => string, onCommit:(Value:string) => void) {
      return html`<div class="bc-props-rowheader">
        <label>${Label}</label>
        ${(onOpenEditor != null) && html`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => onOpenEditor(
              `${TypeLabel} "${Widget!.Name}" - ${Label}`, currentValue(), onCommit
            )}>⤢</button>
        `}
      </div>`
    }

    function TextRow (Label:string, Key:string, Rows:number = 4) {
      return html`<div class="bc-props-row column">
        ${RowHeader(
          Label,
          () => String((Widget as Indexable)[Key] ?? ''),
          (Value) => update(Key,Value)
        )}
        <textarea rows=${Rows} defaultValue=${(Widget as Indexable)[Key] ?? ''}
          onInput=${(Event:Event) => update(Key, (Event.target as HTMLTextAreaElement).value)}
        ></textarea>
      </div>`
    }

    function commitConfigurationJSON (Value:string):void {
      try {
        update('Configuration', JSON.parse(Value))
      } catch (Signal) {
        console.warn('[BrowserCard] invalid JSON for "Configuration":', Signal)
        window.alert('The given configuration is no valid JSON and was not applied.')
      }
    }

    function ConfigurationRow () {
      return html`<div class="bc-props-row column">
        ${RowHeader(
          'Configuration (JSON)',
          () => JSON.stringify(Widget!.Configuration ?? {}, null, 2),
          commitConfigurationJSON
        )}
        <textarea rows="5" spellcheck=${false}
          defaultValue=${JSON.stringify(Widget!.Configuration ?? {}, null, 2)}
          onChange=${(Event:Event) => commitConfigurationJSON((Event.target as HTMLTextAreaElement).value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`
    }

    function ScriptRow () {
      return html`<div class="bc-props-row column">
        ${RowHeader(
          'Script',
          () => Widget!.Script ?? '',
          (Value) => update('Script',Value)
        )}
        <textarea rows="8" spellcheck=${false} defaultValue=${Widget!.Script ?? ''}
          onChange=${(Event:Event) => update('Script', (Event.target as HTMLTextAreaElement).value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`
    }

  /**** type-specific property rows ****/

    let TypeSection:unknown = null
    switch (Widget.Type) {
      case 'button':
        TypeSection = html`
          ${DropDownRow('Style','Variant',[ 'rounded-rect','rectangle','oval','shadow','checkbox','radio','standard','transparent' ])}
          ${TextlineRow("Value","Value")}
          ${CheckboxRow('show label','showName')}
          ${CheckboxRow('enabled','enabled')}
          ${CheckboxRow('auto-hilite','autoHilite')}
          ${CheckboxRow('hilite','Hilite')}
        `
        break
      case 'field':
        TypeSection = html`
          ${DropDownRow('Style','Variant',[ 'opaque','transparent','shadow','rectangle' ])}
          ${TextRow("Value","Value")}
          ${CheckboxRow('locked','lockText')}
          ${CheckboxRow('scrolling','scrolling')}
          ${CheckboxRow('show lines','showLines')}
          ${NumberRow('Font Size','FontSize',14)}
          ${DropDownRow('Font Weight','FontWeight',[ 'normal','bold' ])}
          ${DropDownRow('Alignment','TextAlign',[ 'left','center','right' ])}
          ${ColorRow('Color','Color','#111111')}
        `
        break
      case 'shape':
        TypeSection = html`
          ${DropDownRow('Style','Variant',[ 'rectangle','rounded-rectangle','oval','line','arc','polygon' ])}
          ${ColorRow('Fill Color','FillColor','transparent')}
          ${ColorRow('Border Color','BorderColor','#333333')}
          ${NumberRow('Border Width','BorderWidth',2)}
          ${CheckboxRow('arrow at start','ArrowStart')}
          ${CheckboxRow('arrow at end','ArrowEnd')}
          ${NumberRow('Curvature','Curvature',0.4)}
          ${NumberRow('Sides','Sides',6)}
          ${NumberRow('Corner Radius','CornerRadius',12)}
        `
        break
      case 'picture':
        TypeSection = html`
          ${DropDownRow('Style','Variant',[ 'scale-aspect-fill','scale-aspect-fit','scale-to-fill','actual-size','center' ])}
          ${TextlineRow('Image URL','ImageData')}
        `
        break
      default:                                                       // 'generic'
        TypeSection = html`
          ${TextRow("Value","Value")}
          ${ConfigurationRow()}
        `
    }

    return html`
      <div class="bc-props-panel">
        <div class="bc-props-title">${Widget.Name}</div>
        <div class="bc-props-subtitle">${TypeLabel} · ${Widget.Id}</div>

        <div class="bc-props-section">General</div>
        ${TextlineRow('Name','Name')}
        ${CheckboxRow('visible','visible')}
        ${NumberRow('z-Index','zIndex',0)}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${NumberInput(Geometry.left, (Value) => updateGeometry(Value))}
          ${NumberInput(Geometry.top,  (Value) => updateGeometry(undefined,Value))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${NumberInput(Geometry.width,  (Value) => updateGeometry(undefined,undefined,Value))}
          ${NumberInput(Geometry.height, (Value) => updateGeometry(undefined,undefined,undefined,Value))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${Widget.Anchors[0]}
            onChange=${(Event:Event) => updateAnchors(0,(Event.target as HTMLSelectElement).value)}>
            ${BC_horizontalAnchorses.map((Value) => html`<option key=${Value} value=${Value}>${Value}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${Widget.Anchors[1]}
            onChange=${(Event:Event) => updateAnchors(1,(Event.target as HTMLSelectElement).value)}>
            ${BC_verticalAnchorses.map((Value) => html`<option key=${Value} value=${Value}>${Value}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">Arrange</div>
        <div class="bc-props-row">
          <label>Order</label>
          <button class="bc-props-btn" title="to back"        onClick=${() => onReorder?.('back')}>⤓</button>
          <button class="bc-props-btn" title="send backward"  onClick=${() => onReorder?.('backward')}>↓</button>
          <button class="bc-props-btn" title="bring forward"  onClick=${() => onReorder?.('forward')}>↑</button>
          <button class="bc-props-btn" title="to front"       onClick=${() => onReorder?.('front')}>⤒</button>
        </div>
        <div class="bc-props-row">
          <label>Card</label>
          <select value=${String(CardIndex)}
            onChange=${(Event:Event) => onMoveTo?.(parseInt((Event.target as HTMLSelectElement).value,10))}>
            ${CardNames.map((Name,i) => html`<option key=${i} value=${String(i)}>${Name}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${Widget.Type === 'generic' ? 'Custom Widget' : 'Appearance'}</div>
        ${TypeSection}

        <div class="bc-props-section">Script</div>
        ${ScriptRow()}

        <button class="bc-props-btn copy"   onClick=${onCopy}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${onDelete}>Delete Widget</button>
      </div>
    `
  }

//----------------------------------------------------------------------------//
//                              app component                                 //
//----------------------------------------------------------------------------//

type DialogState =
  | null
  | { kind:'answer';      message:string; buttons:string[]; resolve?:(Result:string) => void }
  | { kind:'ask';         prompt:string; defaultValue:string; resolve?:(Result:string | null) => void }
  | { kind:'export-json'; json:string }
  | { kind:'import-json'; resolve:(Result:string | null) => void }

type Overlay = null | 'go-menu' | 'decks-panel' | 'insert-menu' | 'deck-menu' | 'card-menu' | 'cards-panel'


/**** clamp ****/

function clamp (v:number, min:number, max:number) {
  return Math.max(min, Math.min(max, v))
}

/**** colour <-> (RGB picker + opacity) helpers ****/
/****  a colour is stored as #RRGGBBAA so it carries its own alpha; these split  ****/
/****  it for the (alpha-less) native colour picker plus a separate opacity input ****/

export function RGBHexOf (Color:string):string {     // the #RRGGBB part, for <input type="color">
  const Match = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(Color)
  return (Match == null) ? '#ffffff' : '#'+Match[1].toLowerCase()
}

export function AlphaPercentOf (Color:string):number {   // opacity 0..100; opaque unless told otherwise
  if ((Color == null) || (Color === 'transparent')) { return 0 }
  const Hex8 = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(Color)
  if (Hex8 != null) { return Math.round(parseInt(Hex8[1],16)/255*100) }
  const RGBA = /^rgba\([^,]+,[^,]+,[^,]+,\s*([01]|0?\.[0-9]+)\s*\)$/i.exec(Color)
  if (RGBA != null) { return Math.round(parseFloat(RGBA[1])*100) }
  return 100
}

export function ColorFrom (rgbHex:string, alphaPercent:number):string {   // build #RRGGBBAA
  const Match = /^#?([0-9a-f]{6})$/i.exec(rgbHex)
  const RGB   = (Match == null) ? 'ffffff' : Match[1].toLowerCase()
  const Alpha = Math.round(clamp(alphaPercent,0,100)/100*255).toString(16).padStart(2,'0')
  return '#'+RGB+Alpha
}

/**** ColorAlphaRow — a properties row: colour picker + opacity (%) + full value ****/

function ColorAlphaRow (Label:string, Current:string, Commit:(Color:string) => void) {
  return html`<div class="bc-props-row">
    <label>${Label}</label>
    <input type="color" value=${RGBHexOf(Current)}
      onInput=${(Event:Event) => Commit(ColorFrom((Event.target as HTMLInputElement).value, AlphaPercentOf(Current)))}/>
    <input class="bc-props-opacity" type="number" min="0" max="100" title="opacity (%)"
      value=${AlphaPercentOf(Current)}
      onInput=${(Event:Event) => {
        const Percent = parseInt((Event.target as HTMLInputElement).value,10)
        if (isFinite(Percent)) { Commit(ColorFrom(RGBHexOf(Current), Percent)) }
      }}/>
    <input type="text" value=${Current}
      onInput=${(Event:Event) => Commit((Event.target as HTMLInputElement).value)}/>
  </div>`
}

/**** CardView — Preact component for a Card; manages the card script lifecycle ****/

// CardView is instantiated from outside (Deck) and instantiates its Objects in turn.
// It dispatches 'ready' once both its own script and all child scripts have completed.

function CardView ({
  Card, Scale, CanvasW, CanvasH, makeContext,
  deckProxy, onCardProxy, onCardReady, onMessage, deckRenderSlot = null,
  isEditing = false, selectedIds = [], onSelect, onSelectMany, onEdited, Grid, onBeforeEdit,
}:{
  Card:        BC_Card
  Scale:       number
  CanvasW:     number
  CanvasH:     number
  makeContext: (me:BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null) => BC_ScriptContext
  deckProxy:   BC_DeckProxy
  onCardProxy: (proxy:BC_CardProxy) => void
  onCardReady: () => void
  onMessage?:  (msg:string) => void       // bubbles a widget message up to the deck
  deckRenderSlot?: unknown                 // deck-level on('render') output, shown behind the card
  isEditing?:  boolean
  selectedIds?:string[]
  onSelect?:   (Id:string | null, additive:boolean) => void
  onSelectMany?:(Ids:string[], additive:boolean) => void
  onEdited?:   () => void
  Grid?:       BC_Grid
  onBeforeEdit?:() => void
}) {
  const [, setTick]      = useState(0)
  const isRenderingRef   = useRef(false)
  const forceUpdate      = useCallback(() => { if (!isRenderingRef.current) { setTick((n) => n+1) } }, [])
  const instanceRef      = useRef<ScriptInstance | null>(null)
  if (instanceRef.current == null) { instanceRef.current = new ScriptInstance() }

  const onCardReadyRef   = useRef(onCardReady)
  onCardReadyRef.current = onCardReady
  const onMessageRef     = useRef(onMessage)
  onMessageRef.current   = onMessage

  const allObjects = useMemo(
    () => Card.Widgets,
    [Card],
  )

  // widget proxy registry for this card
  const widgetListRef    = useRef<BC_WidgetProxy[]>([])
  const widgetProxyMap   = useRef(new Map<string, BC_WidgetProxy>())

  // card proxy created once at mount
  const cardProxyRef = useRef<BC_CardProxy | null>(null)
  if (cardProxyRef.current == null) {
    cardProxyRef.current = makeCardProxy(Card, deckProxy, widgetListRef, forceUpdate)
  }
  const cardProxy = cardProxyRef.current!

  // hands the card's DOM element to the proxy, reachable as "me.View" in scripts
  const cardViewRef = useCallback(
    (Element:Element | null) => { (cardProxy as Indexable)[$View] = Element ?? undefined },
    [cardProxy]
  )

  // tracks which child WidgetViews have completed their script
  const childReadySet   = useRef(new Set<string>())
  const scriptDoneRef   = useRef(false)
  const readyFiredRef   = useRef(false)  // 'ready' must not fire again when new
                                         // widgets are inserted in edit mode

  // allObjectsRef: always current, used inside stable callbacks
  const allObjectsRef = useRef(allObjects)
  allObjectsRef.current = allObjects

  // checkAllReadyRef: stable ref to always-current checkAllReady logic
  const checkAllReadyRef = useRef<() => void>(() => {})
  checkAllReadyRef.current = () => {
    if (readyFiredRef.current) { return }
    if (scriptDoneRef.current && (childReadySet.current.size >= allObjectsRef.current.length)) {
      readyFiredRef.current = true
      void instanceRef.current!.dispatch('ready').then(() => onCardReadyRef.current())
    }
  }

  // stable callbacks — prevent WidgetView from re-rendering when CardView re-renders
  const onChildReady = useCallback((id:string) => {
    childReadySet.current.add(id)
    checkAllReadyRef.current()
  }, [])

  const onWidgetProxy = useCallback((id:string, proxy:BC_WidgetProxy) => {
    widgetProxyMap.current.set(id, proxy)
    widgetListRef.current = allObjectsRef.current
      .map((obj) => widgetProxyMap.current.get((obj as BC_Widget).Id))
      .filter((p): p is BC_WidgetProxy => p != null)
  }, [])

  const onWidgetMessage = useCallback((msg:string) => {
    void instanceRef.current!.dispatch(msg)
    onMessageRef.current?.(msg)
  }, [])

  // card script context: me = cardProxy
  const CardContextRef = useRef<BC_ScriptContext | null>(null)
  if (CardContextRef.current == null) {
    CardContextRef.current = makeContext(cardProxy)
  }

  useEffect(() => {
    onCardProxy(cardProxy)

    const inst = instanceRef.current!
    const { Params, Args } = buildScriptParams(inst, CardContextRef.current!, 'card')

    scriptDoneRef.current = false
    readyFiredRef.current = false
    childReadySet.current.clear()

    inst.run(Card.Script ?? '', Params, Args).then(() => {
      scriptDoneRef.current = true
      forceUpdate()
      checkAllReadyRef.current()
    })

    return () => { void inst.teardown() }
  }, [Card.Script])

  const inst = instanceRef.current!
  isRenderingRef.current = true
  let renderSlot: unknown
  try { renderSlot = inst.renderResult() ?? null } finally { isRenderingRef.current = false }

  const CanvasStyle = {
    width:           CanvasW,
    height:          CanvasH,
    transform:       `scale(${Scale})`,
    transformOrigin: 'top left',
    background:      Card.Color ?? '#ffffff00',      // transparent white by default so the deck render shows through
  }
  const WrapperStyle = {        // the white "paper" + drop shadow behind the (now transparent) card
    width:CanvasW*Scale, height:CanvasH*Scale, position:'relative', flexShrink:0,
    background:'#fff', borderRadius:3,
    boxShadow:'0 4px 24px rgba(0,0,0,0.55)',
  }
  const DeckRenderStyle = {        // matches the canvas geometry so it aligns with the card
    position:'absolute', top:0, left:0, width:CanvasW, height:CanvasH,
    transform:`scale(${Scale})`, transformOrigin:'top left',
  }

  return html`
    <div style=${WrapperStyle}>
      ${(deckRenderSlot != null) && html`
        <div class="bc-deck-render" style=${DeckRenderStyle}>${deckRenderSlot}</div>
      `}
      <div class="bc-card-canvas" style=${CanvasStyle} ref=${cardViewRef}>
        ${renderSlot}
        ${allObjects.map((obj) => html`
          <${WidgetView}
            key=${(obj as BC_Widget).Id}
            Obj=${obj as BC_Widget}
            containerW=${CanvasW}
            containerH=${CanvasH}
            makeContext=${makeContext}
            deckProxy=${deckProxy}
            cardProxy=${cardProxy}
            onWidgetProxy=${onWidgetProxy}
            onReady=${onChildReady}
            onMessage=${onWidgetMessage}
          />
        `)}
        ${isEditing && html`
          <${EditLayer}
            Objects=${allObjects as BC_Widget[]}
            CanvasW=${CanvasW}
            CanvasH=${CanvasH}
            Scale=${Scale}
            selectedIds=${selectedIds}
            onSelect=${onSelect ?? (() => undefined)}
            onSelectMany=${onSelectMany ?? (() => undefined)}
            onEdited=${onEdited ?? (() => undefined)}
            Grid=${Grid}
            onBeforeEdit=${onBeforeEdit}
          />
        `}
      </div>
    </div>
  `
}

/**** CardThumbnail — static wireframe preview of a card (no scripts run) ****/

function CardThumbnail ({
  Card, CanvasW, CanvasH,
}:{
  Card:    BC_Card
  CanvasW: number
  CanvasH: number
}) {
  const ThumbW = 88
  const Scale  = ThumbW/Math.max(1,CanvasW)
  const ThumbH = Math.max(24, Math.round(CanvasH*Scale))

  return html`
    <div class="bc-card-thumb"
      style=${{ width:ThumbW, height:ThumbH, background:Card.Color ?? '#fff' }}>
      ${Card.Widgets.filter((Obj) => Obj.visible).map((Obj) => {
        const R     = resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)
        const Color = (
          Obj.Type === 'shape'   ? (Obj.FillColor ?? '#9ca3af') :
          Obj.Type === 'button'  ? '#1d6fd8' :
          Obj.Type === 'field'   ? 'rgba(0,0,0,0.15)' :
          Obj.Type === 'picture' ? '#9ca3af' :
                                   '#7c3aed'                       // 'generic'
        )
        return html`
          <div key=${Obj.Id} style=${{
            position:'absolute',
            left:R.left*Scale, top:R.top*Scale,
            width:Math.max(1,R.width*Scale), height:Math.max(1,R.height*Scale),
            background:Color, borderRadius:'1px',
          }}></div>
        `
      })}
    </div>
  `
}

/**** MenuBar ****/

function MenuBar ({
  DeckName, CardIndex, CardCount,
  activeOverlay, onOverlayToggle,
  onGoFirst, onGoPrev, onGoNext, onGoLast,
  isReadOnly = true, isEditing = false, onEditToggle, onInsert,
  onDeckSave, onDeckRevert, onDeckReset, onDeckExport, onDeckImport,
  onDeckExportText, onDeckImportText,
  onDeckEmbed, onDeckStandalone, onDeckImportURL, onMCPSettings,
  onCardAdd, onCardDuplicate, onCardRename, onCardDelete, onCardMove,
  onCardCopy, onPaste,
  canUndo = false, canRedo = false, onUndo, onRedo,
}:{
  DeckName:       string
  CardIndex:       number
  CardCount:       number
  activeOverlay:   Overlay
  onOverlayToggle: (o:Overlay) => void
  onGoFirst: () => void
  onGoPrev:  () => void
  onGoNext:  () => void
  onGoLast:  () => void
  isReadOnly?:   boolean
  isEditing?:    boolean
  onEditToggle?: () => void
  onInsert?:     (Type:BC_WidgetType) => void
  onDeckSave?:   () => void
  onDeckRevert?: () => void
  onDeckReset?:  () => void
  onDeckExport?:     () => void
  onDeckImport?:     () => void
  onDeckExportText?: () => void
  onDeckImportText?: () => void
  onDeckEmbed?:      () => void
  onDeckStandalone?: () => void
  onDeckImportURL?:  () => void
  onMCPSettings?:    () => void
  onCardAdd?:       () => void
  onCardDuplicate?: () => void
  onCardRename?:    () => void
  onCardDelete?:    () => void
  onCardMove?:      (Delta:number) => void
  onCardCopy?:      () => void
  onPaste?:         () => void
  canUndo?:         boolean
  canRedo?:         boolean
  onUndo?:          () => void
  onRedo?:          () => void
}) {
  const isFirst = CardIndex === 0
  const isLast  = CardIndex === CardCount-1

  const [activeSubmenu, setActiveSubmenu] = useState<'import'|'export'|null>(null)

  function toggleOverlay (o:Overlay) {
    setActiveSubmenu(null)
    onOverlayToggle(activeOverlay === o ? null : o)
  }

  function toggleSubmenu (name:'import'|'export') {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return html`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => toggleOverlay('decks-panel')} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${activeOverlay === 'cards-panel' ? ' active' : ''}`}
        onClick=${() => toggleOverlay('cards-panel')}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position:'relative' }}>
        <button
          class=${`bc-menu-btn${activeOverlay === 'go-menu' ? ' active' : ''}`}
          onClick=${() => toggleOverlay('go-menu')}
          title="Navigate"
        >Go ▾</button>
        ${(activeOverlay === 'go-menu') && html`
          <div class="bc-dropdown-backdrop" onClick=${() => onOverlayToggle(null)}></div>
          <div class="bc-dropdown" style=${{ left:0 }}>
            <div class=${`bc-dropdown-item${isFirst ? ' disabled' : ''}`}
              onClick=${() => { onGoFirst(); onOverlayToggle(null) }}>First Card</div>
            <div class=${`bc-dropdown-item${isFirst ? ' disabled' : ''}`}
              onClick=${() => { onGoPrev(); onOverlayToggle(null) }}>Previous Card</div>
            <div class=${`bc-dropdown-item${isLast ? ' disabled' : ''}`}
              onClick=${() => { onGoNext(); onOverlayToggle(null) }}>Next Card</div>
            <div class=${`bc-dropdown-item${isLast ? ' disabled' : ''}`}
              onClick=${() => { onGoLast(); onOverlayToggle(null) }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position:'relative' }}>
        <button
          class=${`bc-menu-btn${activeOverlay === 'deck-menu' ? ' active' : ''}`}
          onClick=${() => toggleOverlay('deck-menu')}
          title="deck operations"
        >Deck ▾</button>
        ${(activeOverlay === 'deck-menu') && html`
          <div class="bc-dropdown-backdrop" onClick=${() => onOverlayToggle(null)}></div>
          <div class="bc-dropdown" style=${{ left:0 }}>
            <div class=${`bc-dropdown-item${isReadOnly ? ' disabled' : ''}`}
              onClick=${() => { onDeckSave?.(); onOverlayToggle(null) }}>Save Deck</div>
            <div class=${`bc-dropdown-item${isReadOnly ? ' disabled' : ''}`}
              onClick=${() => { onDeckRevert?.(); onOverlayToggle(null) }}>Revert to Saved</div>
            <div class=${`bc-dropdown-item${isReadOnly ? ' disabled' : ''}`}
              onClick=${() => { onDeckReset?.(); onOverlayToggle(null) }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${isReadOnly ? ' disabled' : ''}${activeSubmenu === 'import' ? ' open' : ''}`}
                onClick=${() => !isReadOnly && toggleSubmenu('import')}>Import</div>
              ${(activeSubmenu === 'import') && html`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckImport?.(); onOverlayToggle(null) }}>from JSON File…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckImportText?.(); onOverlayToggle(null) }}>from JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckImportURL?.(); onOverlayToggle(null) }}>from URL…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${activeSubmenu === 'export' ? ' open' : ''}`}
                onClick=${() => toggleSubmenu('export')}>Export</div>
              ${(activeSubmenu === 'export') && html`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckExport?.(); onOverlayToggle(null) }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckExportText?.(); onOverlayToggle(null) }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckEmbed?.(); onOverlayToggle(null) }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => { onDeckStandalone?.(); onOverlayToggle(null) }}>as Standalone App…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => { onMCPSettings?.(); onOverlayToggle(null) }}>MCP Settings…</div>
          </div>
        `}
      </div>
      ${isEditing && html`
        <div style=${{ position:'relative' }}>
          <button
            class=${`bc-menu-btn${activeOverlay === 'card-menu' ? ' active' : ''}`}
            onClick=${() => toggleOverlay('card-menu')}
            title="card operations"
          >Card ▾</button>
          ${(activeOverlay === 'card-menu') && html`
            <div class="bc-dropdown-backdrop" onClick=${() => onOverlayToggle(null)}></div>
            <div class="bc-dropdown" style=${{ left:0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => { onCardAdd?.(); onOverlayToggle(null) }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => { onCardDuplicate?.(); onOverlayToggle(null) }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => { onCardRename?.(); onOverlayToggle(null) }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => { onCardCopy?.(); onOverlayToggle(null) }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => { onPaste?.(); onOverlayToggle(null) }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${isFirst ? ' disabled' : ''}`}
                onClick=${() => { onCardMove?.(-1); onOverlayToggle(null) }}>Move Card backward</div>
              <div class=${`bc-dropdown-item${isLast ? ' disabled' : ''}`}
                onClick=${() => { onCardMove?.(1); onOverlayToggle(null) }}>Move Card forward</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${CardCount <= 1 ? ' disabled' : ''}`}
                onClick=${() => { onCardDelete?.(); onOverlayToggle(null) }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position:'relative' }}>
          <button
            class=${`bc-menu-btn${activeOverlay === 'insert-menu' ? ' active' : ''}`}
            onClick=${() => toggleOverlay('insert-menu')}
            title="insert a new widget"
          >+ New ▾</button>
          ${(activeOverlay === 'insert-menu') && html`
            <div class="bc-dropdown-backdrop" onClick=${() => onOverlayToggle(null)}></div>
            <div class="bc-dropdown" style=${{ left:0 }}>
              ${([
                { Type:'button',  Label:'Button'  },
                { Type:'field',   Label:'Field'   },
                { Type:'shape',   Label:'Shape'   },
                { Type:'picture', Label:'Picture' },
                { Type:'generic', Label:'Custom Widget' },
              ] as { Type:BC_WidgetType; Label:string }[]).map(({ Type,Label }) => html`
                <div key=${Type} class="bc-dropdown-item"
                  onClick=${() => { onInsert?.(Type); onOverlayToggle(null) }}>${Label}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${! canUndo}
          onClick=${onUndo} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${! canRedo}
          onClick=${onRedo} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${DeckName}</div>
      ${! isReadOnly && html`
        <button
          class=${`bc-menu-btn${isEditing ? ' active' : ''}`}
          onClick=${onEditToggle}
          title=${isEditing ? 'switch to browse mode' : 'switch to edit mode'}
        >${isEditing ? '✓ Done' : '✎ Edit'}</button>
      `}
    </div>
  `
}

/**** BottomBar ****/

function BottomBar ({
  CardIndex, CardCount,
  onFirst, onPrev, onNext, onLast, onBack, historyLen,
  consoleShown = false, onConsoleToggle, onScreenshot,
}:{
  CardIndex:  number
  CardCount:  number
  onFirst:    () => void
  onPrev:     () => void
  onNext:     () => void
  onLast:     () => void
  onBack:     () => void
  historyLen: number
  consoleShown?:    boolean
  onConsoleToggle?: () => void
  onScreenshot?:    () => void
}) {
  const isFirst = CardIndex === 0
  const isLast  = CardIndex === CardCount-1
  return html`
    <div class="bc-bottom-bar">
      <button class="bc-nav-btn" onClick=${onBack} disabled=${historyLen === 0} title="Back">◁</button>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${onFirst} disabled=${isFirst} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${onPrev}  disabled=${isFirst} title="Previous Card">‹</button>
        <span class="bc-card-counter">${CardIndex+1} / ${CardCount}</span>
        <button class="bc-nav-btn" onClick=${onNext}  disabled=${isLast}  title="Next Card">›</button>
        <button class="bc-nav-btn" onClick=${onLast}  disabled=${isLast}  title="Last Card">»</button>
      </div>
      <button
        class="bc-nav-btn"
        style=${{ fontSize:13, minWidth:40 }}
        onClick=${onScreenshot} title="download a screenshot of this card"
      >📷</button>
      <button
        class=${`bc-nav-btn${consoleShown ? ' active' : ''}`}
        style=${{ fontSize:13, minWidth:40 }}
        onClick=${onConsoleToggle} title="toggle console"
      >⌨</button>
    </div>
  `
}

/**** Dialog ****/

function Dialog ({ State, onClose }:{ State:DialogState; onClose:(Result:string | null) => void }) {
  if (State == null) { return null }

  if (State.kind === 'answer') {
    return html`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${State.message}</div>
          <div class="bc-dialog-buttons">
            ${State.buttons.map((btn) => html`
              <button key=${btn} class="bc-dialog-btn primary" onClick=${() => onClose(btn)}>${btn}</button>
            `)}
          </div>
        </div>
      </div>
    `
  }

  if (State.kind === 'ask') {
    let enteredValue = State.defaultValue        // tracked without re-rendering
    return html`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${State.prompt}</div>
          <input
            ref=${(el:HTMLInputElement | null) => el?.focus()}
            class="bc-dialog-input" type="text"
            defaultValue=${State.defaultValue}
            onInput=${(e:Event) => { enteredValue = (e.target as HTMLInputElement).value }}
            onKeyDown=${(e:KeyboardEvent) => (e.key === 'Enter') && onClose(enteredValue)}
          />
          <div class="bc-dialog-buttons">
            <button class="bc-dialog-btn secondary" onClick=${() => onClose(null)}>Cancel</button>
            <button class="bc-dialog-btn primary"   onClick=${() => onClose(enteredValue)}>OK</button>
          </div>
        </div>
      </div>
    `
  }

  if (State.kind === 'export-json') {
    return html`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog bc-dialog-wide">
          <div class="bc-dialog-title">Export Deck as JSON</div>
          <textarea class="bc-dialog-textarea" readonly>${State.json}</textarea>
          <div class="bc-dialog-buttons">
            <button class="bc-dialog-btn secondary"
              onClick=${() => navigator.clipboard.writeText(State.json).catch(() => {})}>Copy</button>
            <button class="bc-dialog-btn primary" onClick=${() => onClose(null)}>Close</button>
          </div>
        </div>
      </div>
    `
  }

  let enteredJSON = ''
  return html`
    <div class="bc-dialog-backdrop">
      <div class="bc-dialog bc-dialog-wide">
        <div class="bc-dialog-title">Import Deck from JSON</div>
        <textarea
          class="bc-dialog-textarea"
          placeholder="Paste deck JSON here…"
          onInput=${(e:Event) => { enteredJSON = (e.target as HTMLTextAreaElement).value }}
        ></textarea>
        <div class="bc-dialog-buttons">
          <button class="bc-dialog-btn secondary" onClick=${() => onClose(null)}>Cancel</button>
          <button class="bc-dialog-btn primary"   onClick=${() => onClose(enteredJSON)}>Import</button>
        </div>
      </div>
    </div>
  `
}

/**** MCPSettingsDialog ****/

function MCPSettingsDialog ({
  onClose, onApply,
}:{
  onClose:  () => void
  onApply?: (URL:string, Token:string) => void
}) {
  const StoredURL   = localStorage.getItem('bc-mcp-url')   ?? ''
  const StoredToken = localStorage.getItem('bc-mcp-token') ?? ''

  const [BrokerURL, setBrokerURL]       = useState(StoredURL)
  const [AccessToken, setAccessToken]   = useState(StoredToken)
  const [rememberToken, setRememberToken] = useState(StoredToken !== '')

  function save ():void {
    const URL   = BrokerURL.trim()
    const Token = AccessToken.trim()
    try {
      localStorage.setItem('bc-mcp-url', URL)
      if (rememberToken) {
        localStorage.setItem('bc-mcp-token', Token)
      } else {
        localStorage.removeItem('bc-mcp-token')
      }
    } catch { /* ignore */ }
    onApply?.(URL, Token)
    onClose()
  }

  return html`
    <div class="bc-dialog-backdrop">
      <div class="bc-dialog bc-dialog-wide">
        <div class="bc-dialog-title">MCP Broker Settings</div>
        <div style=${{ padding:'8px 0' }}>
          <label style=${{ display:'block', marginBottom:'4px', fontSize:'12px' }}>Broker WebSocket URL</label>
          <input
            class="bc-dialog-input"
            type="text"
            placeholder="ws://localhost:3001/bc"
            value=${BrokerURL}
            onInput=${(e:Event) => setBrokerURL((e.target as HTMLInputElement).value)}
          />
        </div>
        <div style=${{ padding:'8px 0' }}>
          <label style=${{ display:'block', marginBottom:'4px', fontSize:'12px' }}>Access Token</label>
          <input
            class="bc-dialog-input"
            type="password"
            placeholder="secret token"
            value=${AccessToken}
            onInput=${(e:Event) => setAccessToken((e.target as HTMLInputElement).value)}
          />
          <label style=${{ display:'flex', alignItems:'center', gap:'6px', marginTop:'6px', fontSize:'12px', cursor:'pointer' }}>
            <input
              type="checkbox"
              checked=${rememberToken}
              onChange=${(e:Event) => setRememberToken((e.target as HTMLInputElement).checked)}
            />
            Remember token permanently
          </label>
        </div>
        <div class="bc-dialog-buttons">
          <button class="bc-dialog-btn secondary" onClick=${onClose}>Cancel</button>
          <button class="bc-dialog-btn primary" onClick=${save}>Save</button>
        </div>
      </div>
    </div>
  `
}

/**** DeckView ****/

interface AppProps {
  deck:      BC_Deck | null
  isReadOnly: boolean
  withChrome?:       boolean       // false = bare deck without menu/bottom bars
  StorageKey?:       string                     // key of the currently shown deck
  initialCardIndex?: number
  onDeckSave?:   () => void
  onDeckRevert?: () => void
  onDeckReset?:  () => void
  onDeckExport?: () => void
  onDeckImport?: () => void
  onDeckImportText?: (json:string) => void
  onDeckList?:   () => Promise<BC_DeckInfo[]>
  onDeckOpen?:   (Key:string) => void
  onDeckCreate?: (Name:string) => Promise<void> | void
  onDeckDelete?: (Key:string) => Promise<void> | void
  onDeckRename?: (Key:string, newName:string) => Promise<void> | void
  onDeckEmbed?:      () => void
  onDeckStandalone?: () => void
  onDeckImportURL?:  (URL:string) => Promise<void> | void
  connector?:              MCPConnector
  onDeckSaveImmediate?:    () => Promise<void>
}

function DeckView ({
  deck:initialDeck, isReadOnly, withChrome = true, StorageKey = '',
  initialCardIndex = 0,
  onDeckSave, onDeckRevert, onDeckReset, onDeckExport, onDeckImport, onDeckImportText,
  onDeckList, onDeckOpen, onDeckCreate, onDeckDelete, onDeckRename,
  onDeckEmbed, onDeckStandalone, onDeckImportURL,
  connector, onDeckSaveImmediate,
}:AppProps) {
  const effectiveDeck = initialDeck ?? DemoDeck
  const [Deck]        = useState<BC_Deck>(effectiveDeck)
  const [, setVersion] = useState(0)
  const bumpVersion = () => setVersion((n) => n+1)
  const [CardIndex, setCardIndex]         = useState(Math.min(initialCardIndex, effectiveDeck?.Cards.length - 1 || 0))
  const [History, setHistory]             = useState<number[]>([])
  const [activeOverlay, setActiveOverlay] = useState<Overlay>(null)
  const [activeDialog, setActiveDialog]   = useState<DialogState>(null)
  const [Scale, setScale]                 = useState(1)
  const [CanvasW, setCanvasW]             = useState(DefaultDeckWidth)
  const [CanvasH, setCanvasH]             = useState(DefaultDeckHeight)
  const [showConsole, setShowConsole]     = useState(false)
  const CardAreaRef  = useRef<HTMLDivElement>(null)
  const CardIndexRef = useRef(0)
  CardIndexRef.current = CardIndex

/**** edit mode state ****/

  const [Mode, setMode]               = useState<'browse' | 'edit'>('browse')
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [showMCPSettings, setShowMCPSettings] = useState(false)
  const isEditing = (Mode === 'edit') && ! isReadOnly

  // the sole selected id, or null unless exactly one widget is selected
  const soleSelectedId = (selectedIds.length === 1) ? selectedIds[0] : null

  // click selection: replace, or toggle membership when additive (Shift/Cmd)
  function selectWidget (Id:string | null, additive:boolean):void {
    if (Id == null) { if (! additive) { setSelectedIds([]) } return }
    if (additive) {
      setSelectedIds((prev) =>
        prev.includes(Id) ? prev.filter((x) => x !== Id) : [ ...prev, Id ]
      )
    } else {
      setSelectedIds([ Id ])
    }
  }

  // marquee selection: replace, or merge with the current selection when additive
  function selectWidgets (Ids:string[], additive:boolean):void {
    setSelectedIds((prev) => additive ? Array.from(new Set([ ...prev, ...Ids ])) : Ids)
  }

  function toggleEditMode ():void {
    if (Mode === 'edit') { onDeckSave?.() }    // persist when leaving edit mode
    setMode((prev) => prev === 'edit' ? 'browse' : 'edit')
    setSelectedIds([])
  }

  useEffect(() => { setSelectedIds([]) }, [CardIndex])  // card change deselects

  useEffect(() => {                                       // persist last card index
    if (StorageKey) {
      try { localStorage.setItem('bc-card-index:' + StorageKey, String(CardIndex)) } catch { /* ignore */ }
    }
  }, [StorageKey, CardIndex])

/**** decks panel state and handlers ****/

  const [DeckList, setDeckList] = useState<BC_DeckInfo[] | null>(null)
  const [rememberDeck, setRememberDeck] = useState(deckShallBeRemembered())

  function toggleRememberDeck (Enabled:boolean):void {
    setDeckRemembering(Enabled, StorageKey)
    setRememberDeck(Enabled)
  }

  function refreshDeckList ():void {
    if (onDeckList == null) { setDeckList([]); return }
    void onDeckList().then(setDeckList)
  }

  useEffect(() => {
    if (activeOverlay === 'decks-panel') { setDeckList(null); refreshDeckList() }
  }, [activeOverlay])

  function askUser (prompt:string, defaultValue:string):Promise<string | null> {
    return new Promise(
      (resolve) => setActiveDialog({ kind:'ask', prompt, defaultValue, resolve })
    )
  }

  function confirmWith (message:string, ...buttons:string[]):Promise<string> {
    return new Promise(
      (resolve) => setActiveDialog({ kind:'answer', message, buttons, resolve })
    )
  }

  async function createDeckViaDialog ():Promise<void> {
    const Name = (await askUser('Name of the new deck:',''))?.trim()
    if ((Name == null) || (Name === '')) { return }
    await onDeckCreate?.(Name)            // opens the new deck and remounts
  }

  async function renameDeckViaDialog (Info:BC_DeckInfo):Promise<void> {
    const newName = (await askUser('New name for this deck:',Info.Name))?.trim()
    if ((newName == null) || (newName === '') || (newName === Info.Name)) { return }
    await onDeckRename?.(Info.Key, newName)
    refreshDeckList()
  }

  async function importDeckFromURLViaDialog ():Promise<void> {
    const URLString = (await askUser('URL of the deck to import:','https://'))?.trim()
    if ((URLString == null) || (URLString === '') || (URLString === 'https://')) { return }
    await onDeckImportURL?.(URLString)
  }

  function exportDeckViaDialog ():void {
    setActiveDialog({ kind:'export-json', json:JSON.stringify(Deck,null,2) })
  }

  async function importDeckViaDialog ():Promise<void> {
    const json = await new Promise<string | null>(
      (resolve) => setActiveDialog({ kind:'import-json', resolve })
    )
    if (json != null) { onDeckImportText?.(json) }
  }

  async function deleteDeckViaDialog (Info:BC_DeckInfo):Promise<void> {
    const Choice = await confirmWith(
      `Really delete deck "${Info.Name}"?`, 'Delete','Cancel'
    )
    if (Choice !== 'Delete') { return }
    await onDeckDelete?.(Info.Key)
    refreshDeckList()
  }

/**** card management (edit mode only) ****/

  async function addCardViaDialog ():Promise<void> {
    const Name = (await askUser('Name of the new card:',''))?.trim()
    if ((Name == null) || (Name === '')) { return }
    if (Deck.Cards.some((Card) => Card.Name === Name)) {
      await confirmWith(`A card named "${Name}" already exists.`,'OK')
      return
    }

    const newCard:BC_Card = {
      Id:newInternalId('card'), Name:Name,
      Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[],
    }
    captureUndo()
    Deck.Cards.splice(CardIndex+1, 0, newCard)
    navigate({ type:'card-index', index:CardIndex+1 })
    deckForceUpdate()
  }

  function indexOfCard (Id:string):number {
    return Deck.Cards.findIndex((Card) => Card.Id === Id)
  }

  function duplicateCardAt (Index:number):void {
    const Original = Deck.Cards[Index]
    if (Original == null) { return }

    const Clone = JSON.parse(JSON.stringify(Original)) as BC_Card
      Clone.Id = newInternalId('card')
      Clone.Widgets.forEach((Obj) => { Obj.Id = newInternalId('widget') })

      let Name = Original.Name + ' Copy', Counter = 1
      while (Deck.Cards.some((Card) => Card.Name === Name)) {
        Counter += 1; Name = Original.Name + ' Copy ' + Counter
      }
      Clone.Name = Name
    captureUndo()
    Deck.Cards.splice(Index+1, 0, Clone)
    navigate({ type:'card-index', index:Index+1 })
    deckForceUpdate()
  }

  async function renameCardAt (Index:number):Promise<void> {
    const Card = Deck.Cards[Index]
    if (Card == null) { return }

    const newName = (await askUser('New name for this card:',Card.Name))?.trim()
    if ((newName == null) || (newName === '') || (newName === Card.Name)) { return }
    if (Deck.Cards.some((otherCard) => otherCard.Name === newName)) {
      await confirmWith(`A card named "${newName}" already exists.`,'OK')
      return
    }
    captureUndo()
    Card.Name = newName
    deckForceUpdate()
  }

  async function deleteCardAt (Index:number):Promise<void> {
    const Card = Deck.Cards[Index]
    if (Card == null) { return }

    if (Deck.Cards.length <= 1) {
      await confirmWith('The last remaining card cannot be deleted.','OK')
      return
    }

    const Choice = await confirmWith(
      `Really delete card "${Card.Name}" and all its widgets?`, 'Delete','Cancel'
    )
    if (Choice !== 'Delete') { return }

    captureUndo()
    const currentId = Deck.Cards[CardIndex].Id
    Deck.Cards.splice(Index,1)
    setHistory([])             // card indices in the history are no longer valid
    setSelectedIds([])

    const newIndex = indexOfCard(currentId)     // the current card may have moved
    setCardIndex(newIndex >= 0 ? newIndex : clamp(Index, 0, Deck.Cards.length-1))
    deckForceUpdate()
  }

  function moveCardAt (Index:number, Delta:number):void {
    const newIndex = Index+Delta
    if ((newIndex < 0) || (newIndex >= Deck.Cards.length)) { return }

    captureUndo()
    const currentId = Deck.Cards[CardIndex].Id
    const [ Card ]  = Deck.Cards.splice(Index,1)
    Deck.Cards.splice(newIndex, 0, Card)
    setHistory([])             // card indices in the history are no longer valid
    setCardIndex(Math.max(0, indexOfCard(currentId)))
    deckForceUpdate()
  }

/**** editor window for multi-line properties ****/

  const [activeEditor, setActiveEditor]         = useState<BC_EditorState | null>(null)
  const [PanelGeneration, setPanelGeneration]   = useState(0)

  function openEditorWith (
    Title:string, Value:string, onCommit:(Value:string) => void
  ):void {
    setActiveEditor({
      Title, Value,
      onCommit:(newValue) => {
        onCommit(newValue)
        setPanelGeneration((n) => n+1)   // remounts the panel with fresh values
      },
    })
  }

/**** clipboard operations (edit mode only) ****/

  async function copyCardToClipboard ():Promise<void> {
    const successful = await writeToClipboard(
      CardMIMEType, JSON.stringify(Deck.Cards[CardIndex])
    )
    if (! successful) {
      await confirmWith('BrowserCard could not write to the clipboard.','OK')
    }
  }

  async function copySelectionToClipboard ():Promise<void> {
    if (selectedIds.length === 0) { await copyCardToClipboard(); return }

    const Widgets = Deck.Cards[CardIndex].Widgets
      .filter((Obj) => selectedIds.includes(Obj.Id))
      .sort((a,b) => a.zIndex-b.zIndex)                  // keep the stacking order
    if (Widgets.length === 0) { return }

    // always serialise an array, even for a single widget, so paste is uniform
    const successful = await writeToClipboard(WidgetMIMEType, JSON.stringify(Widgets))
    if (! successful) {
      await confirmWith('BrowserCard could not write to the clipboard.','OK')
    }
  }

  async function cutSelectionToClipboard ():Promise<void> {
    await copySelectionToClipboard()
    if (selectedIds.length > 0) {
      deleteSelection()
    } else {
      await deleteCardAt(CardIndex)              // asks for confirmation first
    }
  }

  async function pasteFromClipboard ():Promise<void> {
    const Payload = await readFromClipboard()
    if (Payload == null) {
      await confirmWith(
        'The clipboard does not contain a BrowserCard card or widget - or ' +
        'BrowserCard was not allowed to read the clipboard (please check ' +
        'your browser permissions, the console may have details).','OK'
      )
      return
    }

    let Candidate:any
    try {
      Candidate = JSON.parse(Payload.Serialization)
    } catch { return }

    const Card = Deck.Cards[CardIndex]
    if (Payload.Kind === 'card') {
      if (! ValueIsCardJSON(Candidate)) { return }

      const newCard = Candidate as BC_Card
        newCard.Id = newInternalId('card')
        newCard.Widgets.forEach((Obj) => { Obj.Id = newInternalId('widget') })
        newCard.Name = uniqueNameIn(
          newCard.Name, new Set(Deck.Cards.map((Card) => Card.Name))
        )
      captureUndo()
      Deck.Cards.splice(CardIndex+1, 0, newCard)
      navigate({ type:'card-index', index:CardIndex+1 })
    } else {
      // accept both a single widget (older clipboard) and an array of widgets
      const Widgets = (Array.isArray(Candidate) ? Candidate : [ Candidate ]) as BC_Widget[]
      if ((Widgets.length === 0) || ! Widgets.every(ValueIsWidgetJSON)) { return }

      captureUndo()
      let maxZIndex   = Card.Widgets.reduce((max,Obj) => Math.max(max,Obj.zIndex), 0)
      const usedNames = new Set(Card.Widgets.map((Obj) => Obj.Name))
      const newIds:string[] = []

      Widgets
        .slice().sort((a,b) => (a.zIndex ?? 0)-(b.zIndex ?? 0))   // preserve order
        .forEach((Widget) => {
          const newWidget = Widget as BC_Widget
            newWidget.Id   = newInternalId('widget')
            newWidget.Name = uniqueNameIn(newWidget.Name ?? 'Widget', usedNames)
            usedNames.add(newWidget.Name)
            maxZIndex += 1
            newWidget.zIndex = maxZIndex
            newWidget.Number = maxZIndex
          Card.Widgets.push(newWidget)
          newIds.push(newWidget.Id)
        })
      setSelectedIds(newIds)
    }
    deckForceUpdate()
  }

/**** captureScreenshot — downloads a PNG of the current card in its ****/
/****                     native pixel size (CardWidth x CardHeight) ****/

  async function captureScreenshot ():Promise<void> {
    const CanvasElement = CardAreaRef.current?.querySelector('.bc-card-canvas') as HTMLElement | null
    if (CanvasElement == null) { return }

    try {
      const RendererURL = 'https://cdn.jsdelivr.net/npm/html-to-image@1/+esm'
      const { toPng } = await import(           // loaded on demand only
        /* @vite-ignore */ RendererURL
      ) as Indexable

      const DataURL = await toPng(CanvasElement, {
        width:CanvasW, height:CanvasH, pixelRatio:1,    // native card size
        style:{ transform:'scale(1)', borderRadius:'0', boxShadow:'none' },
        filter:(Node:HTMLElement) => (         // exclude edit-mode overlays
          ! (Node.classList?.contains('bc-edit-layer'))
        ),
      })

      const currentCard = Deck.Cards[CardIndex]
      const Anchor = document.createElement('a')
        Anchor.href     = DataURL
        Anchor.download = `${Deck.Name ?? 'Deck'} - ${currentCard.Name ?? 'Card'}.png`
      Anchor.click()
    } catch (Signal) {
      console.warn('[BrowserCard] could not create a screenshot:', Signal)
      window.alert(
        'BrowserCard could not create a screenshot - the console may have details.'
      )
    }
  }

/**** auto-save (debounced) — runs after every render while editing ****/

  const saveTimerRef = useRef<number | null>(null)
  useEffect(() => {
    if (! isEditing || (onDeckSave == null)) { return }
    if (saveTimerRef.current != null) { window.clearTimeout(saveTimerRef.current) }
    saveTimerRef.current = window.setTimeout(() => {
      saveTimerRef.current = null
      onDeckSave()
    }, 800)
  })                       // deliberately without dependency list - see comment

/**** MCP connector context — refreshed on every render ****/

  useEffect(() => {
    if (connector == null) { return }
    const Context:BCMCPContext = {
      getDeck:       () => Deck,
      getCardIndex:  () => CardIndexRef.current,
      mutateDeck:    (fn) => { fn(Deck); bumpVersion() },
      navigate:      (Card) => {
        if (typeof Card === 'number') {
          navigate({ type:'card-index', index:Card })
        } else {
          const Idx = Deck.Cards.findIndex((c) => c.Id === Card || c.Name === Card)
          if (Idx >= 0) { navigate({ type:'card-index', index:Idx }) }
        }
      },
      saveDeck:      () => onDeckSaveImmediate?.() ?? Promise.resolve(),
      evalInContext: async (Expression) => {
        const inst = new ScriptInstance()
        const ctx  = buildContext(
          Deck, Deck.Cards, null,
          navigate,
          (message, buttons, resolve) => setActiveDialog({ kind:'answer', message, buttons, resolve }),
          (prompt, defaultValue, resolve) => setActiveDialog({ kind:'ask', prompt, defaultValue, resolve }),
          ConsoleFns, CardIndexRef,
        )
        const { Params, Args } = buildScriptParams(inst, ctx, 'deck')
        const AsyncFn = new Function(...Params, `return (async () => { return (${Expression}) })()`)
        return AsyncFn(...Args)
      },
    }
    connector.setContext(Context)
  })                       // deliberately without dependency list — always fresh

/**** undo/redo — snapshot-based, with coalescing of rapid edit sequences ****/

  const UndoRef         = useRef<string[]>([])
  const RedoRef         = useRef<string[]>([])
  const lastUndoKeyRef  = useRef('')
  const lastUndoTimeRef = useRef(0)
  const [EditGeneration, setEditGeneration] = useState(0)

  const maxUndoSteps      = 100
  const CoalescingPeriod  = 1000                                         // [ms]

  // captures the CURRENT state as an undo step - call BEFORE mutating. Edits
  // with the same (non-empty) key within the coalescing period become one step
  const captureUndo = useCallback((CoalescingKey:string = '') => {
    const now = Date.now()
    if (
      (CoalescingKey !== '') &&
      (CoalescingKey === lastUndoKeyRef.current) &&
      (now-lastUndoTimeRef.current < CoalescingPeriod)
    ) {
      lastUndoTimeRef.current = now
      return
    }
    lastUndoKeyRef.current  = CoalescingKey
    lastUndoTimeRef.current = now

    UndoRef.current.push(JSON.stringify(Deck))
    if (UndoRef.current.length > maxUndoSteps) { UndoRef.current.shift() }
    RedoRef.current = []
  }, [Deck])

  function restoreFrom (Snapshot:string):void {
    const restored = JSON.parse(Snapshot) as BC_Deck
    Object.keys(Deck).forEach((Key) => delete (Deck as Indexable)[Key])
    Object.assign(Deck, restored)        // keeps the object identity intact!

    lastUndoKeyRef.current = ''
    setSelectedIds([])
    setHistory([])
    setCardIndex((prev) => clamp(prev, 0, Deck.Cards.length-1))
    setEditGeneration((n) => n+1)  // remounts CardView with fresh descriptors
    setPanelGeneration((n) => n+1)
    deckForceUpdate()
  }

  function performUndo ():void {
    const Snapshot = UndoRef.current.pop()
    if (Snapshot == null) { return }
    RedoRef.current.push(JSON.stringify(Deck))
    restoreFrom(Snapshot)
  }

  function performRedo ():void {
    const Snapshot = RedoRef.current.pop()
    if (Snapshot == null) { return }
    UndoRef.current.push(JSON.stringify(Deck))
    restoreFrom(Snapshot)
  }

/**** widget insertion, deletion and arrangement (edit mode only) ****/

  function addWidget (Type:BC_WidgetType):void {
    const Card      = Deck.Cards[CardIndex]
    const newWidget = newWidgetOfType(Type, Card, CanvasW, CanvasH)
    captureUndo()
    Card.Widgets.push(newWidget)
    setSelectedIds([ newWidget.Id ])
    deckForceUpdate()
  }

  function deleteSelection ():void {
    if (selectedIds.length === 0) { return }
    const Card = Deck.Cards[CardIndex]
    if (Card.Widgets.some((Obj) => selectedIds.includes(Obj.Id))) {
      captureUndo()
      for (let i = Card.Widgets.length-1; i >= 0; i--) {
        if (selectedIds.includes(Card.Widgets[i].Id)) { Card.Widgets.splice(i,1) }
      }
    }
    setSelectedIds([])
    deckForceUpdate()
  }

  function reorderSelection (Direction:BC_ArrangeDirection):void {
    if (selectedIds.length === 0) { return }
    const Card  = Deck.Cards[CardIndex]
    const arr   = [ ...Card.Widgets ].sort((a,b) => a.zIndex-b.zIndex)
    const isSel = (Obj:BC_Widget) => selectedIds.includes(Obj.Id)
    if (! arr.some(isSel)) { return }

    captureUndo()
    let result = arr
    switch (Direction) {
      case 'front': result = [ ...arr.filter((O) => ! isSel(O)), ...arr.filter(isSel) ]; break
      case 'back':  result = [ ...arr.filter(isSel), ...arr.filter((O) => ! isSel(O)) ]; break
      case 'forward':                  // move the selected block one step to the front
        for (let i = arr.length-2; i >= 0; i--) {
          if (isSel(arr[i]) && ! isSel(arr[i+1])) { const t = arr[i]; arr[i] = arr[i+1]; arr[i+1] = t }
        }
        result = arr; break
      case 'backward':                 // move the selected block one step to the back
        for (let i = 1; i < arr.length; i++) {
          if (isSel(arr[i]) && ! isSel(arr[i-1])) { const t = arr[i]; arr[i] = arr[i-1]; arr[i-1] = t }
        }
        result = arr; break
    }
    result.forEach((Obj,i) => { Obj.zIndex = i+1; Obj.Number = i+1 })
    deckForceUpdate()
  }

  function moveSelectionToCard (targetIndex:number):void {
    if ((selectedIds.length === 0) || (targetIndex === CardIndex)) { return }
    const Card   = Deck.Cards[CardIndex]
    const Target = Deck.Cards[targetIndex]
    if (Target == null) { return }

    const Moving = Card.Widgets
      .filter((Obj) => selectedIds.includes(Obj.Id))
      .sort((a,b) => a.zIndex-b.zIndex)
    if (Moving.length === 0) { return }

    captureUndo()
    for (let i = Card.Widgets.length-1; i >= 0; i--) {
      if (selectedIds.includes(Card.Widgets[i].Id)) { Card.Widgets.splice(i,1) }
    }
    let maxZ = Target.Widgets.reduce((max,Obj) => Math.max(max,Obj.zIndex), 0)
    Moving.forEach((Obj) => {
      maxZ += 1; Obj.zIndex = maxZ; Obj.Number = maxZ
      Target.Widgets.push(Obj)
    })
    setSelectedIds([])
    deckForceUpdate()
  }

/**** deck script instance ****/

  const [, setDeckTick]  = useState(0)
  const deckForceUpdate  = useCallback(() => setDeckTick((n) => n+1), [])
  const deckInstanceRef  = useRef<ScriptInstance | null>(null)
  if (deckInstanceRef.current == null) { deckInstanceRef.current = new ScriptInstance() }

/**** deck proxy ****/

  const cardProxyRef  = useRef<BC_CardProxy | null>(null)
  const deckProxyRef  = useRef<BC_DeckProxy | null>(null)
  if (deckProxyRef.current == null) {
    deckProxyRef.current = makeDeckProxy(Deck, cardProxyRef, deckForceUpdate)
  }
  const deckProxy = deckProxyRef.current!

  // hands the deck's DOM element to the proxy, reachable as "me.View" in scripts
  const deckViewRef = useCallback(
    (Element:Element | null) => { (deckProxy as Indexable)[$View] = Element ?? undefined },
    [deckProxy]
  )

  const deckScriptDoneRef = useRef(false)
  const cardReadyDoneRef  = useRef(false)

/**** canvas size from CSS custom properties + scaling via ResizeObserver ****/

  useEffect(() => {
    const Area = CardAreaRef.current
    if (Area == null) { return }

    function updateScale () {
      const { width, height } = Area!.getBoundingClientRect()
      const style = getComputedStyle(Area!)

    // priority: CSS variables (e.g. inline style on the custom element)
    // > deck properties "CardWidth"/"CardHeight" > built-in defaults
      const cwVar = parseInt(style.getPropertyValue('--canvas-width').trim())
      const chVar = parseInt(style.getPropertyValue('--canvas-height').trim())
      const cw = (isFinite(cwVar) && (cwVar > 0)) ? cwVar : (Deck.CardWidth  ?? DefaultDeckWidth)
      const ch = (isFinite(chVar) && (chVar > 0)) ? chVar : (Deck.CardHeight ?? DefaultDeckHeight)

      setCanvasW(cw)
      setCanvasH(ch)

      const Padding   = 24
      const fitScale  = Math.max(0.1, Math.min((width - Padding*2) / cw, (height - Padding*2) / ch))

    // an explicit "--canvas-scale" pins the scale - but only in browse mode;
    // while editing the canvas may be scaled down to fit (never up beyond it)
      const csVar = parseFloat(style.getPropertyValue('--canvas-scale').trim())
      if (isFinite(csVar) && (csVar > 0)) {
        setScale(isEditing ? Math.min(csVar, fitScale) : csVar)
      } else {
        setScale(fitScale)
      }
    }

    updateScale()
    // re-measure once the edit chrome (e.g. the properties panel) has settled,
    // so the fit-scale reflects the actually available area, not the pre-layout one
    const RAF = requestAnimationFrame(updateScale)
    const Observer = new ResizeObserver(updateScale)
    Observer.observe(Area)
    return () => { cancelAnimationFrame(RAF); Observer.disconnect() }
  }, [Deck.CardWidth, Deck.CardHeight, isEditing])

/**** navigate ****/

  const navigate = useCallback((Target:BC_NavTarget) => {
    const Cards = Deck.Cards
    setCardIndex((prev) => {
      const addHistory = (next:number) => {
        if (next !== prev) {
          setHistory((h) => [...h, prev])
          cardReadyDoneRef.current = false   // new card needs to fire ready again
        }
        return next
      }
      switch (Target.type) {
        case 'next':       return addHistory(clamp(prev+1, 0, Cards.length-1))
        case 'prev':       return addHistory(clamp(prev-1, 0, Cards.length-1))
        case 'first':      return addHistory(0)
        case 'last':       return addHistory(Cards.length-1)
        case 'card-index': return addHistory(clamp(Target.index, 0, Cards.length-1))
        case 'card-name': {
          const Idx = Cards.findIndex((c) => c.Name === Target.name)
          return (Idx >= 0) ? addHistory(Idx) : prev
        }
        case 'card-id': {
          const Idx = Cards.findIndex((c) => c.Id === Target.id)
          return (Idx >= 0) ? addHistory(Idx) : prev
        }
        default: return prev
      }
    })
  }, [Deck])

/**** console functions — shared by every script context of this Deck ****/

  const ConsoleFns = useMemo<BC_ConsoleFns>(() => ({
    print (...ArgList:unknown[]) {
      Console_print(deckProxy, ArgList); setShowConsole(true)
    },
    println (...ArgList:unknown[]) {
      Console_println(deckProxy, ArgList); setShowConsole(true)
    },
    clearConsole () { Console_clear(deckProxy) },
  }), [])

/**** requestDeckSave — persist the deck (no-op while read-only) ****/

  const requestDeckSave = useCallback(():Promise<void> => {
    if (isReadOnly) { return Promise.resolve() }
    return onDeckSaveImmediate?.() ?? Promise.resolve()
  }, [isReadOnly, onDeckSaveImmediate])

/**** makeBaseContext — builds a script context for any Visual in this Deck ****/

  const makeBaseContext = useCallback((me:BC_DeckProxy | BC_CardProxy | BC_WidgetProxy | null):BC_ScriptContext => {
    return buildContext(
      Deck, Deck.Cards, me,
      navigate,
      (message, buttons, resolve) => setActiveDialog({ kind:'answer', message, buttons, resolve }),
      (prompt, defaultValue, resolve) => setActiveDialog({ kind:'ask', prompt, defaultValue, resolve }),
      ConsoleFns, CardIndexRef, requestDeckSave,
    )
  }, [Deck, navigate, ConsoleFns, requestDeckSave])

/**** deck ready check ****/

  function checkDeckReady () {
    if (deckScriptDoneRef.current && cardReadyDoneRef.current) {
      void deckInstanceRef.current!.dispatch('ready')
    }
  }

  function onCardProxy (proxy:BC_CardProxy) {
    cardProxyRef.current = proxy
  }

  function onCardReady () {
    cardReadyDoneRef.current = true
    checkDeckReady()
  }

/**** deck script lifecycle ****/

  useEffect(() => {
    const inst = deckInstanceRef.current!
    const ctx  = buildContext(
      Deck, Deck.Cards, deckProxy,
      navigate,
      (message, buttons, resolve) => setActiveDialog({ kind:'answer', message, buttons, resolve }),
      (prompt, defaultValue, resolve) => setActiveDialog({ kind:'ask', prompt, defaultValue, resolve }),
      ConsoleFns, CardIndexRef, requestDeckSave,
    )
    const { Params, Args } = buildScriptParams(inst, ctx, 'deck')

    deckScriptDoneRef.current  = false
    cardReadyDoneRef.current   = false

    inst.run(Deck.Script ?? '', Params, Args).then(() => {
      deckScriptDoneRef.current = true
      deckForceUpdate()
      checkDeckReady()
    })

    return () => { void inst.teardown() }
  }, [Deck.Script])

/**** keyboard handling — nudges the selection in edit mode, navigates else ****/

  useEffect(() => {
    if (! withChrome) { return }  // embedded decks must not hijack the keyboard

    function onKey (e:KeyboardEvent) {
      if (activeDialog != null) { return }

      const Target = e.target as HTMLElement | null    // don't fight form fields
      if ((Target != null) && /^(INPUT|TEXTAREA|SELECT)$/.test(Target.tagName)) { return }

      if (isEditing) {
        if ((e.key === 'z') || (e.key === 'Z')) {
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault()
            if (e.shiftKey) { performRedo() } else { performUndo() }
            return
          }
        }
        if (((e.key === 'y') || (e.key === 'Y')) && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          performRedo()
          return
        }

        if ((e.metaKey || e.ctrlKey) && ! e.shiftKey && ! e.altKey) {
          switch (e.key) {
            case 'c': e.preventDefault(); void copySelectionToClipboard(); return
            case 'x': e.preventDefault(); void cutSelectionToClipboard();  return
            case 'v': e.preventDefault(); void pasteFromClipboard();       return
          }
        }
      }

      if (isEditing && (selectedIds.length > 0)) {
        if (e.key === 'Escape') { setSelectedIds([]); return }

        if ((e.key === 'Delete') || (e.key === 'Backspace')) {
          e.preventDefault()
          deleteSelection()
          return
        }

        const Selected = Deck.Cards[CardIndex].Widgets.filter((Obj) => selectedIds.includes(Obj.Id))
        if (Selected.length === 0) { return }

        const Delta = e.shiftKey ? 10 : 1
        let ddx = 0, ddy = 0
        switch (e.key) {
          case 'ArrowLeft':  ddx = -Delta; break
          case 'ArrowRight': ddx =  Delta; break
          case 'ArrowUp':    ddy = -Delta; break
          case 'ArrowDown':  ddy =  Delta; break
          default: return
        }

        e.preventDefault()
        captureUndo('nudge:'+selectedIds.join(','))   // one coalesced step for the group
        Selected.forEach((Obj) => {
          const { left,top,width,height } = resolveGeometry(Obj.Anchors, Obj.Offsets, CanvasW, CanvasH)
          Obj.Offsets = computeOffsets(left+ddx, top+ddy, width, height, Obj.Anchors, CanvasW, CanvasH)
        })
        deckForceUpdate()
        return
      }

      if ((e.key === 'ArrowRight') || (e.key === 'ArrowDown')) { navigate({ type:'next' }) }
      if ((e.key === 'ArrowLeft')  || (e.key === 'ArrowUp'))   { navigate({ type:'prev' }) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate, activeDialog, isEditing, selectedIds, CardIndex, CanvasW, CanvasH, withChrome])

/**** goBack ****/

  function goBack () {
    if (History.length === 0) { return }
    const Prev = History[History.length-1]
    setHistory((h) => h.slice(0, -1))
    setCardIndex(Prev)
  }

/**** render ****/

  const Card           = Deck.Cards[CardIndex]
  const deckRenderSlot = deckInstanceRef.current!.renderResult() ?? null

  const selectedWidget = (
    isEditing && (soleSelectedId != null)         // properties only for a single widget
    ? Card.Widgets.find((Obj) => Obj.Id === soleSelectedId) ?? null
    : null
  )

  const Grid:BC_Grid = {
    isActive:Deck.SnapToGrid === true,
    Width:   Deck.GridWidth  ?? 10,
    Height:  Deck.GridHeight ?? 10,
  }

  return html`
    <${Fragment}>
      <div class="bc-app" ref=${deckViewRef}>
        ${withChrome && html`<${MenuBar}
          DeckName=${Deck.Name}
          CardIndex=${CardIndex}
          CardCount=${Deck.Cards.length}
          activeOverlay=${activeOverlay}
          onOverlayToggle=${setActiveOverlay}
          onGoFirst=${() => navigate({ type:'first' })}
          onGoPrev=${()  => navigate({ type:'prev'  })}
          onGoNext=${()  => navigate({ type:'next'  })}
          onGoLast=${()  => navigate({ type:'last'  })}
          isReadOnly=${isReadOnly}
          isEditing=${isEditing}
          onEditToggle=${toggleEditMode}
          onInsert=${addWidget}
          onDeckSave=${onDeckSave}
          onDeckRevert=${onDeckRevert}
          onDeckReset=${onDeckReset}
          onDeckExport=${onDeckExport}
          onDeckImport=${onDeckImport}
          onDeckExportText=${exportDeckViaDialog}
          onDeckImportText=${() => void importDeckViaDialog()}
          onCardAdd=${() => void addCardViaDialog()}
          onCardDuplicate=${() => duplicateCardAt(CardIndex)}
          onCardRename=${() => void renameCardAt(CardIndex)}
          onCardDelete=${() => void deleteCardAt(CardIndex)}
          onCardMove=${(Delta:number) => moveCardAt(CardIndex,Delta)}
          onCardCopy=${() => void copyCardToClipboard()}
          onPaste=${() => void pasteFromClipboard()}
          canUndo=${UndoRef.current.length > 0}
          canRedo=${RedoRef.current.length > 0}
          onUndo=${performUndo}
          onRedo=${performRedo}
          onDeckEmbed=${onDeckEmbed}
          onDeckStandalone=${onDeckStandalone}
          onDeckImportURL=${() => void importDeckFromURLViaDialog()}
          onMCPSettings=${() => setShowMCPSettings(true)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area" ref=${CardAreaRef}>
            <${CardView}
              key=${Card.Id + ':' + EditGeneration}
              Card=${Card}
              Scale=${Scale}
              CanvasW=${CanvasW}
              CanvasH=${CanvasH}
              deckRenderSlot=${deckRenderSlot}
              makeContext=${makeBaseContext}
              deckProxy=${deckProxy}
              onCardProxy=${onCardProxy}
              onCardReady=${onCardReady}
              onMessage=${(msg:string) => void deckInstanceRef.current!.dispatch(msg)}
              isEditing=${isEditing}
              selectedIds=${selectedIds}
              onSelect=${selectWidget}
              onSelectMany=${selectWidgets}
              onEdited=${deckForceUpdate}
              Grid=${Grid}
              onBeforeEdit=${() => captureUndo()}
            />
          </div>
          ${isEditing && html`
            <${PropertiesPanel}
              key=${(soleSelectedId ?? (selectedIds.length > 1 ? 'multi' : 'card:'+Card.Id)) + ':' + PanelGeneration}
              Widget=${selectedWidget}
              SelectedCount=${selectedIds.length}
              CanvasW=${CanvasW}
              CanvasH=${CanvasH}
              onEdited=${deckForceUpdate}
              CardNames=${Deck.Cards.map((Card) => Card.Name)}
              CardIndex=${CardIndex}
              onDelete=${deleteSelection}
              onReorder=${reorderSelection}
              onMoveTo=${moveSelectionToCard}
              Card=${Card}
              Deck=${Deck}
              onOpenEditor=${openEditorWith}
              onBeforeEdit=${captureUndo}
              onCopy=${() => void copySelectionToClipboard()}
            />
          `}
        </div>
        ${(activeOverlay === 'decks-panel') && html`
          <div class="bc-dropdown-backdrop" onClick=${() => setActiveOverlay(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => setActiveOverlay(null)}>×</button>
            </div>
            ${! isReadOnly && html`
              <button class="bc-decks-new" onClick=${createDeckViaDialog}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${(DeckList == null)
                ? html`<div class="bc-decks-empty">loading…</div>`
                : (DeckList.length === 0)
                  ? html`<div class="bc-decks-empty">no decks found</div>`
                  : DeckList.map((Info) => html`
                      <div key=${Info.Key}
                        class=${`bc-decks-item${Info.Key === StorageKey ? ' active' : ''}`}>
                        <span class="bc-decks-name"
                          title=${Info.Name}
                          onClick=${() => {
                            if (Info.Key !== StorageKey) { onDeckOpen?.(Info.Key) }
                          }}
                        >${Info.Name}</span>
                        ${! isReadOnly && html`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void renameDeckViaDialog(Info)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void deleteDeckViaDialog(Info)}>×</button>
                        `}
                      </div>
                    `)
              }
            </div>
            <label class="bc-decks-remember"
              title="reopen the deck you last worked on automatically after a page reload">
              <input type="checkbox" checked=${rememberDeck}
                onChange=${(e:Event) => toggleRememberDeck((e.target as HTMLInputElement).checked)}/>
              <span>remember last deck on reload</span>
            </label>
          </div>
        `}
        ${(activeOverlay === 'cards-panel') && html`
          <div class="bc-dropdown-backdrop" onClick=${() => setActiveOverlay(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => setActiveOverlay(null)}>×</button>
            </div>
            ${isEditing && html`
              <button class="bc-decks-new" onClick=${() => void addCardViaDialog()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${Deck.Cards.map((listedCard,i) => html`
                <div key=${listedCard.Id}
                  class=${`bc-cards-item${i === CardIndex ? ' active' : ''}`}>
                  <div class="bc-cards-main"
                    onClick=${() => {
                      if (i !== CardIndex) { navigate({ type:'card-index', index:i }) }
                    }}>
                    <${CardThumbnail}
                      Card=${listedCard} CanvasW=${CanvasW} CanvasH=${CanvasH}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${listedCard.Name}>${listedCard.Name}</div>
                      <div class="bc-cards-sub">
                        #${i+1} · ${listedCard.Widgets.length}${' '}
                        ${listedCard.Widgets.length === 1 ? 'widget' : 'widgets'}
                      </div>
                    </div>
                  </div>
                  ${isEditing && html`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move this card backward"
                        disabled=${i === 0}
                        onClick=${() => moveCardAt(i,-1)}>↑</button>
                      <button class="bc-console-btn" title="move this card forward"
                        disabled=${i === Deck.Cards.length-1}
                        onClick=${() => moveCardAt(i,1)}>↓</button>
                      <button class="bc-console-btn" title="duplicate this card"
                        onClick=${() => duplicateCardAt(i)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void renameCardAt(i)}>✎</button>
                      <button class="bc-console-btn" title="delete this card"
                        disabled=${Deck.Cards.length <= 1}
                        onClick=${() => void deleteCardAt(i)}>×</button>
                    </div>
                  `}
                </div>
              `)}
            </div>
          </div>
        `}
        ${showConsole && html`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => Console_clear(deckProxy)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => setShowConsole(false)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${deckProxy[$Console]}</pre>
          </div>
        `}
        ${withChrome && html`<${BottomBar}
          CardIndex=${CardIndex}
          CardCount=${Deck.Cards.length}
          onFirst=${() => navigate({ type:'first' })}
          onPrev=${ () => navigate({ type:'prev'  })}
          onNext=${ () => navigate({ type:'next'  })}
          onLast=${ () => navigate({ type:'last'  })}
          onBack=${goBack}
          historyLen=${History.length}
          consoleShown=${showConsole}
          onConsoleToggle=${() => setShowConsole((prev) => ! prev)}
          onScreenshot=${() => void captureScreenshot()}
        />`}
        <${Dialog}
          State=${activeDialog}
          onClose=${(Result:string | null) => {
            const Dialog_ = activeDialog
            setActiveDialog(null)
            if (Dialog_ != null) {
              switch (Dialog_.kind) {
                case 'answer':      Dialog_.resolve?.(Result ?? ''); break
                case 'ask':         Dialog_.resolve?.(Result);       break
                case 'import-json': Dialog_.resolve(Result);         break
              }
            }
          }}
        />
      </div>
      ${(activeEditor != null) && html`
        <${EditorWindow}
          key=${activeEditor.Title}
          State=${activeEditor}
          onClose=${() => setActiveEditor(null)}
        />
      `}
      ${showMCPSettings && html`
        <${MCPSettingsDialog}
          onClose=${() => setShowMCPSettings(false)}
          onApply=${(URL:string, Token:string) => connector?.configure(URL, Token)}
        />
      `}
    <//>
  `
}

//----------------------------------------------------------------------------//
//                             custom elements                                //
//----------------------------------------------------------------------------//

/**** BC_ModuleURL — public URL of this module, used by the export functions ****/

  const BC_ModuleURL = 'https://rozek.github.io/browser-card/dist/BrowserCard.js'

/**** installBCStyles — installs the shared stylesheet (once per document) ****/

function installBCStyles ():void {
  if (document.getElementById('bc-styles') == null) {
    const StyleEl = document.createElement('style')
    StyleEl.id = 'bc-styles'
    StyleEl.textContent = Styles
    document.head.appendChild(StyleEl)
  }
}

/**** downloadFile — offers the given text as a file download ****/

function downloadFile (Name:string, Text:string, MIMEType:string):void {
  const FileBlob = new Blob([ Text ], { type:MIMEType })
  const BlobURL  = URL.createObjectURL(FileBlob)
  const Anchor   = document.createElement('a')
    Anchor.href     = BlobURL
    Anchor.download = Name
  Anchor.click()
  setTimeout(() => URL.revokeObjectURL(BlobURL), 1000)
}

/**** escapedForHTML — escapes a string for use in HTML attributes/content ****/

export function escapedForHTML (Text:string):string {
  return Text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;')
}

/**** escapedForSingleQuotedAttr — escapes for single-quoted HTML attributes ****/
/**** (JSON never contains single quotes, so only &, <, > need escaping)      ****/

function escapedForSingleQuotedAttr (Text:string):string {
  return Text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/'/g,'&#39;')
}

//----------------------------------------------------------------------------//
//                              BC_Designer                                   //
//----------------------------------------------------------------------------//

// <bc-designer> is the full BrowserCard designer: menu and bottom bars, edit
// mode and a decks panel with access to all decks persisted in IndexedDB

class BC_Designer extends HTMLElement {
  static get observedAttributes () {
    return [ 'name','src','readonly' ]
  }

  #Container: HTMLDivElement | null = null
  #Deck:     BC_Deck | null = null
  #isReadOnly = false
  #StorageKey = 'bc-deck:default'
  #Generation = 0          // remount key - bumped whenever the deck is swapped
  #MountId    = 0                    // guards against overlapping async mounts
  #Connector  = new MCPConnector()

/**** connectedCallback ****/

  connectedCallback () {
    this.#Connector.connect()
    void this.#mount()
  }

/**** disconnectedCallback ****/

  disconnectedCallback () {
    this.#Connector.disconnect()
    if (this.#Container != null) { render(null as any, this.#Container) }
  }

/**** attributeChangedCallback ****/

  attributeChangedCallback () {
    if (this.isConnected) { void this.#mount() }
  }

/**** #mount — parses "src", prefers a persisted copy from IndexedDB ****/

  async #mount ():Promise<void> {
    const MountId = ++this.#MountId

    installBCStyles()

    if (this.#Container == null) {
      this.#Container = document.createElement('div')
      this.#Container.style.cssText = 'width:100%;height:100%;display:block;'
      this.appendChild(this.#Container)
    }

    const src = this.getAttribute('src') ?? ''

    let Deck:BC_Deck | null = null
    if (src.trim()) {
      try {
        const Candidate = JSON.parse(src)
        if (ValueIsDeck(Candidate)) {
          Deck = Candidate as BC_Deck
        } else {
          console.warn('[BrowserCard] "src" attribute does not contain a valid deck')
        }
      } catch {
        console.warn('[BrowserCard] invalid JSON in "src" attribute')
      }
    }
    if (Deck == null) { Deck = JSON.parse(pristineDemoDeckJSON) as BC_Deck }

    this.#StorageKey = 'bc-deck:' + (this.getAttribute('name') ?? Deck.Name ?? 'default')

    if (deckShallBeRemembered()) {   // opt-in: reopen the last deck, even overriding a "name" default
      try {
        const lastKey = localStorage.getItem(LastDeckKey)
        if (lastKey && lastKey !== this.#StorageKey) {
          const lastDeck = await get(lastKey, DeckStore)
          if (MountId !== this.#MountId) { return }
          if (ValueIsDeck(lastDeck)) { this.#StorageKey = lastKey }
        }
      } catch { /* ignore */ }
    }

    try {                  // a persisted copy supersedes the original definition
      const persisted = await get(this.#StorageKey, DeckStore)
      if (MountId !== this.#MountId) { return }       // superseded by new mount
      if (ValueIsDeck(persisted)) {
        Deck = persisted as BC_Deck
      } else {
        if (persisted != null) {
          console.warn('[BrowserCard] ignoring invalid persisted deck for key ' + quoted(this.#StorageKey))
        }
      }
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }

    adjustIdCounterFor(Deck)
    if ((Deck as Indexable).Id == null) { (Deck as Indexable).Id = newInternalId('deck') }

    this.#Deck      = Deck
    this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
    this.#Generation += 1
    this.#renderDeck()
  }

/**** #renderDeck ****/

  #renderDeck ():void {
    rememberCurrentDeck(this.#StorageKey)   // keep the "last deck" pointer fresh (no-op unless enabled)

    let initialCardIndex = 0
    try {
      const saved = localStorage.getItem('bc-card-index:' + this.#StorageKey)
      if (saved != null) { initialCardIndex = Math.max(0, parseInt(saved, 10) || 0) }
    } catch { /* ignore */ }

    render(html`<${DeckView}
      key=${this.#Generation}
      deck=${this.#Deck}
      isReadOnly=${this.#isReadOnly}
      StorageKey=${this.#StorageKey}
      initialCardIndex=${initialCardIndex}
      onDeckSave=${()   => void this.#saveDeck()}
      onDeckRevert=${() => void this.#revertDeck()}
      onDeckReset=${()  => void this.#resetDeck()}
      onDeckExport=${() => this.#exportDeck()}
      onDeckImport=${() => this.#importDeck()}
      onDeckImportText=${(json:string) => void this.#importDeckFromJSON(json)}
      onDeckList=${()   => this.#listDecks()}
      onDeckOpen=${(Key:string) => void this.#openDeck(Key)}
      onDeckCreate=${(Name:string) => this.#createDeck(Name)}
      onDeckDelete=${(Key:string) => this.#deleteDeck(Key)}
      onDeckRename=${(Key:string, newName:string) => this.#renameDeck(Key,newName)}
      onDeckEmbed=${() => this.#exportEmbeddable()}
      onDeckStandalone=${() => this.#exportStandalone()}
      onDeckImportURL=${(URL:string) => this.#importDeckFromURL(URL)}
      connector=${this.#Connector}
      onDeckSaveImmediate=${() => this.#saveDeck()}
    />` as any, this.#Container!)
  }

/**** #importDeckFromURL — fetches a deck (JSON) and persists it ****/

  async #importDeckFromURL (URLString:string):Promise<void> {
    if (this.#isReadOnly) { return }

    try {
      const Response = await fetch(URLString)
      if (! Response.ok) {
        window.alert(`The deck could not be loaded (HTTP ${Response.status})`)
        return
      }

      const Candidate = JSON.parse(await Response.text())
      if (! ValueIsDeck(Candidate)) {
        window.alert('The given URL does not deliver a valid BrowserCard deck.')
        return
      }

      const Deck = Candidate as BC_Deck
      adjustIdCounterFor(Deck)
      if ((Deck as Indexable).Id == null) { (Deck as Indexable).Id = newInternalId('deck') }

      this.#Deck      = Deck
      this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
      await this.#saveDeck()
      this.#Generation += 1
      this.#renderDeck()
    } catch (Signal) {
      window.alert('Import failed: ' + Signal)
    }
  }

/**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/

  #exportEmbeddable ():void {
    if (this.#Deck == null) { return }

    const DeckName  = this.#Deck.Name ?? 'Deck'
    const escapedSrc = escapedForSingleQuotedAttr(JSON.stringify(this.#Deck))
    const ModuleURL  = BC_ModuleURL
    const Width      = this.#Deck.CardWidth  ?? DefaultDeckWidth
    const Height     = this.#Deck.CardHeight ?? DefaultDeckHeight

    const Snippet = (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapedForHTML(DeckName)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${escapedForHTML(ModuleURL)}"></script>

  <bc-deck
    style="display:block; width:${Width}px; height:${Height}px"
    src='${escapedSrc}'
  ></bc-deck>
</body>
</html>`
    )

    downloadFile(DeckName + '.embed.html', Snippet, 'text/html')
  }

/**** #exportStandalone — complete web app, referencing the public module ****/

  #exportStandalone ():void {
    if (this.#Deck == null) { return }

    const DeckName  = this.#Deck.Name ?? 'Deck'
    const escapedSrc = escapedForSingleQuotedAttr(JSON.stringify(this.#Deck))

    const Page = (
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${escapedForHTML(DeckName)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${escapedForHTML(BC_ModuleURL)}"></script>
  <bc-deck style="display:block; width:100%; height:100%" src='${escapedSrc}'></bc-deck>
</body>
</html>`
    )

    downloadFile(DeckName + '.html', Page, 'text/html')
  }

/**** #listDecks — all decks persisted in IndexedDB (plus the current one) ****/

  async #listDecks ():Promise<BC_DeckInfo[]> {
    let InfoList:BC_DeckInfo[] = []
    try {
      const KeyList = await keys(DeckStore)
      InfoList = KeyList
        .filter((Key):Key is string => (
          (typeof Key === 'string') && Key.startsWith(DeckKeyPrefix)
        ))
        .map((Key) => ({ Key, Name:Key.slice(DeckKeyPrefix.length) }))
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }

    if (! InfoList.some((Info) => Info.Key === this.#StorageKey)) {
      InfoList.unshift({                  // current deck was never saved so far
        Key:this.#StorageKey, Name:this.#StorageKey.slice(DeckKeyPrefix.length)
      })
    }

    return InfoList.sort((a,b) => a.Name.localeCompare(b.Name))
  }

/**** #openDeck — switches to another persisted deck ****/

  async #openDeck (Key:string):Promise<void> {
    try {
      const persisted = await get(Key, DeckStore)
      if (! ValueIsDeck(persisted)) {
        window.alert('This deck cannot be loaded (it seems to be damaged).')
        return
      }
      const Deck = persisted as BC_Deck
      adjustIdCounterFor(Deck)
      this.#StorageKey = Key
      this.#Deck      = Deck
      this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
      this.#Generation += 1
      this.#renderDeck()                       // #renderDeck records the last-deck pointer
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }
  }

/**** #createDeck — creates, persists and opens a new (empty) deck ****/

  async #createDeck (Name:string):Promise<void> {
    if (this.hasAttribute('readonly')) { return }

    const Key = DeckKeyPrefix + Name
    try {
      const existing = await get(Key, DeckStore)
      if (existing != null) {
        window.alert(`A deck named "${Name}" already exists.`)
        return
      }
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
      return
    }

    const Deck:BC_Deck = {
      Id:newInternalId('deck'), Name:Name, readOnly:false,
      swipeToAdjacentCard:true, Script:'',
      Cards:[{
        Id:newInternalId('card'), Name:'Card 1',
        Color:null, Alpha:1, dontSearch:false, Script:'', Widgets:[],
      }],
    }

    this.#StorageKey = Key
    this.#Deck      = Deck
    this.#isReadOnly = false
    await this.#saveDeck()
    this.#Generation += 1
    this.#renderDeck()
  }

/**** #deleteDeck — removes a persisted deck (but not the open one) ****/

  async #deleteDeck (Key:string):Promise<void> {
    if (this.hasAttribute('readonly')) { return }
    if (Key === this.#StorageKey) {
      window.alert(
        'The currently open deck cannot be deleted - ' +
        'use "Reset to Original" instead.'
      )
      return
    }
    try {
      await del(Key, DeckStore)
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }
  }

/**** #renameDeck — renames a persisted deck (key and "name" property) ****/

  async #renameDeck (Key:string, newName:string):Promise<void> {
    if (this.hasAttribute('readonly')) { return }

    const newKey = DeckKeyPrefix + newName
    if (newKey === Key) { return }

    try {
      const existing = await get(newKey, DeckStore)
      if (existing != null) {
        window.alert(`A deck named "${newName}" already exists.`)
        return
      }

      if (Key === this.#StorageKey) {              // renames the current deck
        this.#Deck!.Name = newName
        this.#StorageKey  = newKey
        await this.#saveDeck()
        await del(Key, DeckStore)
        this.#renderDeck()
      } else {                                    // renames a persisted deck
        const persisted = await get(Key, DeckStore)
        if (! ValueIsDeck(persisted)) { return }
        ;(persisted as BC_Deck).Name = newName
        await set(newKey, persisted, DeckStore)
        await del(Key, DeckStore)
      }
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }
  }

/**** #saveDeck — JSON round-trip strips any non-serializable values ****/

  async #saveDeck ():Promise<void> {
    if ((this.#Deck == null) || this.#isReadOnly) { return }
    try {
      const Serialization = JSON.parse(JSON.stringify(this.#Deck))
      await set(this.#StorageKey, Serialization, DeckStore)
    } catch (Signal) {
      console.warn('[BrowserCard] could not persist deck:', Signal)
    }
  }

/**** #revertDeck — reloads the last persisted copy ****/

  async #revertDeck ():Promise<void> {
    if (this.#isReadOnly) { return }
    try {
      const persisted = await get(this.#StorageKey, DeckStore)
      if (! ValueIsDeck(persisted)) {
        window.alert('There is no (valid) saved copy of this deck yet.')
        return
      }
      const Deck = persisted as BC_Deck
      adjustIdCounterFor(Deck)
      this.#Deck      = Deck
      this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
      this.#Generation += 1
      this.#renderDeck()
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }
  }

/**** #resetDeck — deletes the persisted copy, restores the original ****/

  async #resetDeck ():Promise<void> {
    if (this.#isReadOnly) { return }
    try {
      await del(this.#StorageKey, DeckStore)
    } catch (Signal) {
      console.warn('[BrowserCard] could not access IndexedDB:', Signal)
    }
    void this.#mount()
  }

/**** #exportDeck — downloads the deck as a JSON file ****/

  #exportDeck ():void {
    if (this.#Deck == null) { return }
    downloadFile(
      (this.#Deck.Name ?? 'Deck') + '.json',
      JSON.stringify(this.#Deck,null,2), 'application/json'
    )
  }

/**** #importDeck — loads a deck from a JSON file and persists it ****/

  #importDeck ():void {
    if (this.#isReadOnly) { return }
    const Input = document.createElement('input')
      Input.type   = 'file'
      Input.accept = 'application/json,.json,.bc'
      Input.onchange = async ():Promise<void> => {
        const chosenFile = Input.files?.[0]
        if (chosenFile == null) { return }
        try {
          const Candidate = JSON.parse(await chosenFile.text())
          if (! ValueIsDeck(Candidate)) {
            window.alert('The chosen file does not contain a valid BrowserCard deck.')
            return
          }
          const Deck = Candidate as BC_Deck
          adjustIdCounterFor(Deck)
          if ((Deck as Indexable).Id == null) { (Deck as Indexable).Id = newInternalId('deck') }
          this.#Deck      = Deck
          this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
          await this.#saveDeck()
          this.#Generation += 1
          this.#renderDeck()
        } catch (Signal) {
          window.alert('Import failed: ' + Signal)
        }
      }
    Input.click()
  }

/**** #importDeckFromJSON — parses and persists a deck from a JSON string ****/

  async #importDeckFromJSON (JSONString:string):Promise<void> {
    if (this.#isReadOnly) { return }
    try {
      const Candidate = JSON.parse(JSONString)
      if (! ValueIsDeck(Candidate)) {
        window.alert('The pasted text does not contain a valid BrowserCard deck.')
        return
      }
      const Deck = Candidate as BC_Deck
      adjustIdCounterFor(Deck)
      if ((Deck as Indexable).Id == null) { (Deck as Indexable).Id = newInternalId('deck') }
      this.#Deck      = Deck
      this.#isReadOnly = this.hasAttribute('readonly') || (Deck.readOnly ?? false)
      await this.#saveDeck()
      this.#Generation += 1
      this.#renderDeck()
    } catch (Signal) {
      window.alert('Import failed: ' + Signal)
    }
  }
}

//----------------------------------------------------------------------------//
//                               BC_DeckElement                                     //
//----------------------------------------------------------------------------//

// <bc-deck src="..."> renders a bare deck without any menu or bottom bars -
// meant for embedding decks into other web pages. It neither reads from nor
// writes to IndexedDB - the "src" attribute is the single source of truth

class BC_DeckElement extends HTMLElement {
  static get observedAttributes () {
    return [ 'src' ]
  }

  #Container: HTMLDivElement | null = null
  #Generation = 0

/**** connectedCallback ****/

  connectedCallback () { this.#mount() }

/**** disconnectedCallback ****/

  disconnectedCallback () {
    if (this.#Container != null) { render(null as any, this.#Container) }
  }

/**** attributeChangedCallback ****/

  attributeChangedCallback () {
    if (this.isConnected) { this.#mount() }
  }

/**** #mount ****/

  #mount ():void {
    installBCStyles()

    if (this.#Container == null) {
      this.#Container = document.createElement('div')
      this.#Container.style.cssText = 'width:100%;height:100%;display:block;'
      this.appendChild(this.#Container)
    }

    const src = this.getAttribute('src') ?? ''

    let Deck:BC_Deck | null = null
    if (src.trim()) {
      try {
        const Candidate = JSON.parse(src)       // attribute entities were already
        if (ValueIsDeck(Candidate)) {          // decoded by the HTML parser
          Deck = Candidate as BC_Deck
        }
      } catch { /* handled below */ }
    }

    if (Deck == null) {
      console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute')
      render(html`
        <div style=${{
          display:'flex', alignItems:'center', justifyContent:'center',
          width:'100%', height:'100%', color:'#888',
          font:'13px/1.4 system-ui, sans-serif',
        }}>this &lt;bc-deck&gt; contains no valid deck</div>
      ` as any, this.#Container)
      return
    }

    adjustIdCounterFor(Deck)

    this.#Generation += 1
    render(html`<${DeckView}
      key=${this.#Generation}
      deck=${Deck}
      isReadOnly=${true}
      withChrome=${false}
    />` as any, this.#Container)
  }
}

  const global = (Function('return this'))()
  global.BC = {
    render, html, Preact,
    createContext, toChildArray, cloneElement,
    createPortal,
    useId, useRef, useState, useEffect, useCallback, useMemo, useContext,
    fromLocalTo, fromViewportTo, fromDocumentTo,
    Marked, markedHighlight, markedKatex, hljs,
    ModuleURL: import.meta.url,        // actual URL of the running BrowserCard.js
  }

if (customElements.get('bc-deck') == null) {
  customElements.define('bc-deck', BC_DeckElement)
}
if (customElements.get('bc-designer') == null) {
  customElements.define('bc-designer', BC_Designer)
}
