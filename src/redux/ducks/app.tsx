const SET_FOOTER_TEXT = 'portfolio2.0/app/setFooterText';
const SET_DARK_MODE = 'portfolio2.0/app/setDarkMode';
const SET_VIEW = 'protfolio2.0/app/setView';
const SET_PROMPT = 'portfolio2.0/app/setPrompt';
const SET_PROMPT_ITEM = 'portfolio2.0/app/setPromptItem';
const SET_PROMPT_TYPE = 'portfolio2.0/app/setPromptType';


const SET_HOME_POSITIONS = 'portfolio2.0/app/setHomePositions';
const SET_SKILLS_POSITIONS = 'portfolio2.0/app/setSkillsPositions';
const SET_WORK_POSITIONS = 'portfolio2.0/app/setWorkPositions';
const SET_PROJECT_POSITIONS = 'portfolio2.0/app/setProjectPositions';



const initialState = {
    footerText: '',
    prompt: false,
    type: null,
    item: null,

    darkMode: false,
    colorConfig: {
        primary: '#F8F9FB',
        secondary: '#FFFFFF',
        teriary: '#CCCCCC',
        highlight: '#FFCC67',
        shadow: '#EEEEEE',
        project: 'aquamarine',
        navigation: '#FFCC67'
    },

    view: 'HI, THERE',

    homeRef: null,
    homeStartPosition: null,
    homeEndPosition: null,
    homeHeight: null,
    homeWidth: null,
    skillsRef: null,
    skillsStartPosition: null,
    skillsEndPosition: null,
    workRef: null,
    workStartPosition: null,
    workEndPosition: null,
    projectRef: null,
    projectStartPosition: null,
};

export default (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_FOOTER_TEXT:
            return {...state, footerText: action.payload}
        case SET_DARK_MODE:
            if (action.payload) {
                return {
                    ...state, 
                    darkMode: action.payload,
                    colorConfig: {
                        primary: '#263238',
                        secondary: '#3A4A52',
                        teriary: '#3A4A52',
                        highlight: '#FFFFFF',
                        shadow: 'rgba(0,0,0,0.3)',
                        project: '#3A4A52',
                        navigation: '#FF5850'
                    }
                }
            } else {
                return {
                    ...state, 
                    darkMode: action.payload,
                    colorConfig: {
                        primary: '#F8F9FB',
                        secondary: '#FFFFFF',
                        teriary: '#CCCCCC',
                        highlight: '#FFCC67',
                        shadow: '#EEEEEE',
                        project: 'aquamarine',
                        navigation: '#FFCC67'
                    }
                }
            }
        case SET_VIEW:
            return {...state, view: action.payload}
        case SET_PROMPT:
            return {...state, prompt: action.payload}
        case SET_PROMPT_ITEM:
            return {...state, item: action.payload}
        case SET_PROMPT_TYPE:
            return {...state, type: action.payload}
        case SET_HOME_POSITIONS:
            return {
                ...state,
                homeRef: action.payload.ref,
                homeStartPosition: action.payload.startPosition,
                homeEndPosition: action.payload.endPosition,
            }
        case SET_SKILLS_POSITIONS:
            return {
                ...state,
                skillsRef: action.payload.ref,
                skillsStartPosition: action.payload.startPosition,
                skillsEndPosition: action.payload.endPosition
            }
        case SET_WORK_POSITIONS:
            return {
                ...state,
                workRef: action.payload.ref,
                workStartPosition: action.payload.startPosition,
                workEndPosition: action.payload.endPosition
            }
        case SET_PROJECT_POSITIONS:
            return {
                ...state,
                projectRef: action.payload.ref,
                projectStartPosition: action.payload.startPosition
            }
        default:
            return state;
    }
};

export const setFooterText = (payload: String) => ({
    type: SET_FOOTER_TEXT,
    payload: payload
});

export const setDarkMode = (payload: boolean) => ({
    type: SET_DARK_MODE,
    payload: payload
});

export const setView = (payload: String) => ({
    type: SET_VIEW,
    payload: payload
});

export const setPrompt = (payload: boolean) => ({
    type: SET_PROMPT,
    payload: payload,
});

export const setPromptItem = (payload: Object) => ({
    type: SET_PROMPT_ITEM,
    payload: payload
});

export const setPromptType = (payload: String) => ({
    type: SET_PROMPT_TYPE,
    payload: payload
});

export const setHomePositions = (payload: object) => ({
    type: SET_HOME_POSITIONS,
    payload: payload
});

export const setSkillsPositions = (payload: object) => ({
    type: SET_SKILLS_POSITIONS,
    payload: payload
});

export const setWorkPositions = (payload: object) => ({
    type: SET_WORK_POSITIONS,
    payload: payload
});

export const setProjectPositions = (payload: object) => ({
    type: SET_PROJECT_POSITIONS,
    payload: payload
});