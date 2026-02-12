## Why

The current registration system only captures basic demographic information (name and age). To support healthcare or medical-related use cases, we need to collect additional vital information: biological sex and blood type. This enables better user profiling and potential integration with health management systems.

## What Changes

- Add a **sex** field to the registration form with options: Masculino, Feminino, Outro
- Add a **blood type** field to the registration form with options: A, B, AB, O (with positive/negative variants)
- Update the user data model to include these new fields
- Modify the CSV export to include sex and blood type columns
- Update form validation to ensure these fields are properly filled
- Enhance the user list display to show the new fields

## Capabilities

### New Capabilities
- `user-health-data`: Capture and manage health-related user information including biological sex and blood type

### Modified Capabilities
- `user-registration`: Extend existing registration capability to include health-related fields (sex and blood type)
- `csv-export`: Update CSV export format to include new health data columns

## Impact

**Affected Components:**
- `app/src/components/RegistrationForm.jsx` - Add new form fields and validation
- `app/src/App.jsx` - Update user state model and CSV export headers/data mapping
- `app/src/components/UserList.jsx` - Display new fields in the user list
- `app/src/index.css` - Potential styling updates for new form elements

**Data Model:**
- User object will expand from `{name, age}` to `{name, age, sex, bloodType}`

**CSV Format:**
- CSV headers will change from `['Nome', 'Idade']` to `['Nome', 'Idade', 'Sexo', 'Tipo Sanguíneo']`
