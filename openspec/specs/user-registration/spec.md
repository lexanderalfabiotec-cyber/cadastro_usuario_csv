## ADDED Requirements

### Requirement: Registration form includes health fields
The registration form SHALL include fields for biological sex and blood type in addition to existing name and age fields.

#### Scenario: Form displays all required fields
- **WHEN** user views the registration form
- **THEN** system SHALL display input fields for: Nome Completo, Idade, Sexo, and Tipo Sanguíneo

#### Scenario: Form validates all fields before submission
- **WHEN** user attempts to submit the registration form
- **THEN** system SHALL validate that all four fields (name, age, sex, blood type) are properly filled

### Requirement: User data model includes health information
The user data model SHALL be extended to include sex and blood type fields.

#### Scenario: User object contains health data
- **WHEN** a new user is registered
- **THEN** the user object SHALL contain properties: name, age, sex, and bloodType

#### Scenario: Health data is accessible in application state
- **WHEN** application manages user data
- **THEN** sex and bloodType SHALL be available alongside name and age in the users array
