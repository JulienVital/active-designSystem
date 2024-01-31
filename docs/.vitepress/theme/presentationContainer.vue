<template>
    <div class="language-" id="copyContainer">
        <div class="mySlot" ref="mySlot">
            <slot></slot>
        </div>

    </div>
</template>

<style>
.mySlot{
    width: 100%;
}
.mySlot li + li {
    margin-top: 0px;
}

</style>


