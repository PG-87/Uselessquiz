<template>
    <div class="base-timer">
        <svg
                class="base-timer__svg"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
        >
            <g class="base-timer__circle">
                <circle
                        class="base-timer__path-elapsed"
                        cx="50"
                        cy="50"
                        r="10"
                />
            </g>
        </svg>
        <span class="base-timer__label">
      <!-- Remaining time label -->
    </span>
    </div>
</template>

<script>
    // export default {
    //     name: "Timer"
    // }
    export default {
        name: "Timer",
            computed: {
        formattedTimeLeft() {
            const timeLeft = this.timeLeft
            // The largest round integer less than or equal
            // to the result of time divided being by 60.
            const minutes = Math.floor(timeLeft / 60)
            // Seconds are the remainder of the time divided
            // by 60 (modulus operator)
            let seconds = timeLeft % 60
            // If the value of seconds is less than 10,
            // then display seconds with a leading zero
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            // The output in MM:SS format
            return `${minutes}:${seconds}`
        }
    }
    }
</script>

<style scoped lang="scss">
    /* Sets the containers height and width */
    .base-timer {
        position: relative;
        width: 300px;
        height: 300px;
        /* Removes SVG styling that would hide the time label */
        &__circle {
            fill: none;
            stroke: none;
        }
        /* The SVG path that displays the timer's progress */
        &__path-elapsed {
            stroke-width: 7px;
            stroke:grey;
        }
    }
</style>