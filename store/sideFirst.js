export const state = () => ({
    fsb: true
    })

export const mutations={
    toggle(state) {
        state.fsb=!state.fsb;
    }
}