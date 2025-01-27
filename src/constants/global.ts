export const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const bloodGroup = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']

const genders = ['male', 'female', 'other'];

export const monthOptions = monthNames.map((item) => ({
    value: item,
    label: item,
}))


export const bloodGroupOptions = bloodGroup.map((group) => ({
    value: group,
    label: group,
}));

export const genderOptions = genders.map((group) => ({
    value: group,
    label: group,
}));