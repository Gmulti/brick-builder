import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'

import '../src/styles/default.css'
// Atoms
import Popover from '../src/ui/Popover'
import { SCButton as Button } from '../src/ui/Buttons'

import PlusSvg from '../src/ui/svg/plus'
import DragSvg from '../src/ui/svg/drag'
import RightSvg from '../src/ui/svg/right'
import MoreSvg from '../src/ui/svg/more'

// Block
import Block, { BlockAction, BlockMore } from '../src/ui/Block'
import BlockButton from '../src/ui/Block/BlockButton'
import BlockText from '../src/ui/Block/BlockText'

// Molecules
import InputColor from '../src/ui/Settings/InputColor'
import Field from '../src/ui/Settings/Field'
import Toggle from '../src/ui/Settings/Toggle'
import Input from '../src/ui/Settings/Input'
import Range from '../src/ui/Settings/Range'
import Select from '../src/ui/Settings/Select'
import Align from '../src/ui/Settings/Align'

// EditorInserter
import EditorInserter from '../src/ui/EditorInserter/index'
import EditorInserterGridItem from '../src/ui/EditorInserter/EditorInserterGridItem'
import EditorFuse from '../src/ui/EditorInserter/EditorFuse'

// Organisms
import Toolbar from '../src/ui/Toolbar'
import BlockSettings from '../src/ui/Settings/Block'
import EditorToggle from '../src/ui/EditorInserter/EditorToggle'

// Layout
import {
    SCPage as Page,
    SCToolbar,
    SCPreview,
    SCSetting
} from '../src/ui/Layout'

storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

storiesOf('Button', module).add('with text', () => (
    <React.Fragment>
        <Button onClick={action('clicked')}>Preview</Button>
        <Button disabled>Disabled</Button>
    </React.Fragment>
))

storiesOf('Block', module)
    .add('new', () => (
        <Block newBlock={true}>
            <BlockAction>
                <BlockButton>
                    <PlusSvg />
                </BlockButton>
                <BlockButton cursor="-webkit-grab">
                    <DragSvg />
                </BlockButton>
            </BlockAction>
            <BlockMore>
                <BlockButton>
                    <MoreSvg />
                </BlockButton>
            </BlockMore>
        </Block>
    ))
    .add('selected', () => (
        <Block selected={true}>
            <BlockAction>
                <BlockButton>
                    <PlusSvg />
                </BlockButton>
                <BlockButton cursor="-webkit-grab">
                    <DragSvg />
                </BlockButton>
            </BlockAction>
            <BlockMore>
                <BlockButton>
                    <MoreSvg />
                </BlockButton>
            </BlockMore>
        </Block>
    ))
    .add('text block', () => (
        <Block>
            <BlockText
                defaultValue={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis metus nec lectus ultrices sollicitudin. Cras molestie iaculis augue nec faucibus'
                }
            />
        </Block>
    ))
    .add('title block', () => <div />)

storiesOf('Popover', module)
    .add('bottom left', () => <Popover />)
    .add('bottom right', () => <Popover position="bottom-right" />)
    .add('top left', () => <Popover position="top-left" />)
    .add('top right', () => <Popover position="top-right" />)
    .add('with hide action', () => (
        <Popover position="top-right" actionHide={action('hide')} />
    ))

const blocks = [
    {
        name: 'Text',
        tags: ['paragraph', 'content']
    },
    {
        name: 'button',
        tags: ['link', 'btn']
    },
    {
        name: 'image',
        tags: ['picture', 'img']
    },
    {
        name: 'divider',
        tags: ['seperation', 'hr', 'line']
    },
    {
        name: 'spacer',
        tags: ['space', 'sep']
    },
    {
        name: 'social',
        tags: ['fb', 'facebook', 'twitter', 'network']
    },
    {
        name: 'post',
        tags: ['article', 'content']
    },
    {
        name: 'column-1',
        tags: ['col', 'c1']
    },
    {
        name: 'column-2',
        tags: ['col', 'c2']
    }
]
storiesOf('Editor inserter', module)
    .add('opened', () => (
        <Popover>
            <EditorInserter>
                {blocks.map(block => <EditorInserterGridItem block={block} />)}
            </EditorInserter>
        </Popover>
    ))
    .add('editor with toggle', () => (
        <EditorToggle>
            <EditorInserter>
                {blocks.map(block => <EditorInserterGridItem block={block} />)}
            </EditorInserter>
        </EditorToggle>
    ))

storiesOf('Settings/Dropdown', module)
    .add('simple', () => <div />)
    .add('grouped', () => <div />)
storiesOf('Settings/Select', module)
    .add('Simple select', () => (
        <Select
            options={[
                { label: 'Adelaide', value: 'adelaide' },
                { label: 'Brisbane', value: 'brisbane' },
                { label: 'Canberra', value: 'canberra' },
                { label: 'Darwin', value: 'darwin' },
                { label: 'Hobart', value: 'hobart' },
                { label: 'Melbourne', value: 'melbourne' },
                { label: 'Perth', value: 'perth' },
                { label: 'Sydney', value: 'sydney' }
            ]}
        />
    ))
    .add('inseide Field', () => (
        <Field label="Font Family">
            <Select
                options={[
                    { label: 'Arial', value: 'arial' },
                    { label: 'Georgia', value: 'georgia' },
                    { label: 'Monospace', value: 'monospace' },
                    { label: 'Ubuntu', value: 'ubuntu' }
                ]}
            />
        </Field>
    ))
storiesOf('Settings/Checkbox', module).add('', () => <div />)
storiesOf('Settings/Radio', module).add('', () => <div />)
storiesOf('Settings/Toggle', module)
    .add('toggle', () => <Toggle onChange={action('toggle change event')} />)
    .add('toggle default checked', () => (
        <Toggle
            isDefaultChecked={true}
            onChange={action('toggle change event')}
        />
    ))
    .add('inside Field', () => (
        <Field label="Drop cap">
            <Toggle onChange={action('toggle change event')} />
        </Field>
    ))
storiesOf('Settings/InputColor', module)
    .add('simple', () => (
        <InputColor handleChangeComplete={action('handleChangeComplete')} />
    ))
    .add('inside Field', () => (
        <Field label="Background-color">
            <InputColor
                handleChange={action('handleChange')}
                handleChangeComplete={action('handleChangeComplete')}
            />
        </Field>
    ))
storiesOf('Settings/Input', module)
    .add('input text', () => <Input type="text" onChange={action('change')} />)
    .add('inside Field', () => (
        <Field label="Link">
            <Input
                type="text"
                onChange={action('change')}
                placeholder="https://your-link.here"
            />
        </Field>
    ))
storiesOf('Settings/Align', module)
    .add('Align text', () => <Align onChange={action('Align change')} />)
    .add('Align image', () => (
        <Align type="image" onChange={action('Align change')} />
    ))
    .add('inside Field', () => (
        <Field label="Align Image">
            <Align
                type="image"
                isDefaultChecked="left"
                onChange={action('Align change')}
            />
        </Field>
    ))
storiesOf('Settings/Range', module)
    .add('simple range', () => (
        <Range handleChange={action('handle range change')} />
    ))
    .add('text range', () => (
        <Range handleChange={action('handle range change')} isText={true} />
    ))
    .add('inside Field', () => (
        <Field label="Width">
            <Range handleChange={action('handle range change')} isText={true} />
        </Field>
    ))
storiesOf('Settings/Field', module)
    .add('simple', () => <div />)
    .add('with visibility', () => <div />)
    .add('with advanced', () => <div />)
storiesOf('Settings/Fold', module).add('', () => <div />)
storiesOf('Settings/Block', module)
    .add('normal', () => (
        <BlockSettings title="Text Settings">
            <Field label="Custom Size">
                <Range isText={true} />
            </Field>
            <Field label="Text align">
                <Align isDefaultChecked="left" />
            </Field>
            <Field label="Drop cap">
                <Toggle />
            </Field>
        </BlockSettings>
    ))
    .add('collapsed', () => (
        <BlockSettings isOpen={false} title="Background Color">
            <Field label="Background">
                <InputColor
                    color={'#FFFFF'}
                    handleChangeComplete={action('handleChangeComplete')}
                />
            </Field>
        </BlockSettings>
    ))

storiesOf('Toolbar', module)
    .add('full', () => (
        <Toolbar
            onClickPreview={action('click preview')}
            onClickDone={action('click done')}
        />
    ))
    .add('with preview button', () => (
        <Toolbar onClickPreview={action('click preview')} />
    ))
    .add('with done button', () => (
        <Toolbar onClickDone={action('done preview')} />
    ))
    .add('alone', () => <Toolbar />)
storiesOf('Layout', module).add('basic app layout', () => (
    <Page>
        <SCToolbar>
            <Toolbar />
        </SCToolbar>
        <SCPreview />
        <SCSetting />
    </Page>
))
