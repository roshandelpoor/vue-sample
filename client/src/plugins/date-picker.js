import Vue from 'vue'
import moment from 'moment'
import { cloneDeep as clone } from 'lodash'
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'

const highlight = function highlight (formatted, dateMoment) {
  let attributes = {}
  if (dateMoment.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
    attributes['class'] = 'is-today'
  }
  return attributes
}

let locale = process.env.VUE_APP_I18N_LOCALE || 'en' // the localization in your project env file (en,fa,ar...)
let localeConfig = () => ({
  ar: {
    dow: 0,
    dir: 'rtl',
    displayFormat: vm => {
      switch (vm.type) {
        case 'date':
          return 'YYYY/MM/DD'
        case 'datetime':
          return 'YYYY/MM/DD HH:mm'
        case 'year':
          return 'YYYY'
        case 'month':
          return 'MM'
        case 'yearmonth':
          return 'YY/MM'
        case 'time':
          return 'HH:mm'
      }
    },
    lang: {
      label: 'AR',
      submit: 'اختيار',
      cancel: 'إلغاء',
      now: 'الآن',
      nextMonth: 'الشهر القادم',
      prevMonth: 'الشهر الماضي'
    }
  },
  en: {
    dow: 0,
    dir: 'ltr',
    displayFormat: vm => {
      switch (vm.type) {
        case 'date':
          return 'YYYY/MM/DD'
        case 'datetime':
          return 'YYYY/MM/DD HH:mm'
        case 'year':
          return 'YYYY'
        case 'month':
          return 'MM'
        case 'yearmonth':
          return 'YY/MM'
        case 'time':
          return 'HH:mm'
      }
    }
  }
})

export const datePickerConfig = {
  name: 'date-picker',
  props: {
    locale,
    highlight,
    localeConfig,
    clearable: true,
    autoSubmit: true,
    color: '#00acc1',
    format: 'YYYY-MM-DD',
    displayFormat: 'jDD jMMMM jYYYY'
  }
}

export const dateTimePickerConfig = {
  name: 'date-time-picker',
  props: {
    locale,
    highlight,
    localeConfig,
    clearable: true,
    autoSubmit: true,
    color: '#00acc1',
    type: 'datetime',
    format: 'YYYY-MM-DD HH:mm',
    displayFormat: 'jYYYY-jMM-jDD HH:mm'
  }
}

export const localize = function (localeName) {
  locale = localeName
}

Vue.use(clone(VuePersianDatetimePicker), datePickerConfig)
Vue.use(clone(VuePersianDatetimePicker), dateTimePickerConfig)
