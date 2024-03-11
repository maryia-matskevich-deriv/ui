import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "../src/main";
import { Button } from "../src/main";


const meta = {
    title: "Components/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    args: {
        children: <p>This is basic dialog</p>,
        isOpen:true
    },
    argTypes: {
        children: {
            description: "The content of the modal.you can use the `Dialog.Header`, `Dialog.Body`, and `Dialog.Footer` components to structure the content of the modal.",
            control: false
        },
    }
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Default Dialog",
    render : ()=>{
        return (
            <>
            <Dialog isOpen={true}>
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const HideHeaderCloseIcon: Story = {
    name: "Hide Close Icon",
    render : ()=>{
        return (
            <>
            <Dialog isOpen={true}>
                <Dialog.Header hideCloseIcon >title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const NoHeader: Story = {
    name: "Hide Header",
    render : ()=>{
        return (
            <>
            <Dialog isOpen={true}>
                <Dialog.Body>body</Dialog.Body>
                <Dialog.Footer>
                    <Button color="black">cancel</Button>
                    <Button>ok</Button>
                </Dialog.Footer>
            </Dialog>
            </>
        )
    }
};

export const NoFooter: Story = {
    name: "Hide Footer",
    render : ()=>{
        return (
            <>
            <Dialog isOpen={true}>
                <Dialog.Header>title</Dialog.Header>
                <Dialog.Body>body</Dialog.Body>
            </Dialog>
            </>
        )
    }
};
