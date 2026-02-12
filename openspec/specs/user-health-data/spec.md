## ADDED Requirements

### Requirement: Capture biological sex
The system SHALL allow users to specify their biological sex during registration.

#### Scenario: User selects sex from predefined options
- **WHEN** user is filling out the registration form
- **THEN** system SHALL present three options: "Masculino", "Feminino", and "Outro"

#### Scenario: Sex field is required
- **WHEN** user attempts to submit the form without selecting a sex
- **THEN** system SHALL display a validation error and prevent form submission

### Requirement: Capture blood type
The system SHALL allow users to specify their blood type during registration.

#### Scenario: User selects blood type from predefined options
- **WHEN** user is filling out the registration form
- **THEN** system SHALL present blood type options: A+, A-, B+, B-, AB+, AB-, O+, O-

#### Scenario: Blood type field is required
- **WHEN** user attempts to submit the form without selecting a blood type
- **THEN** system SHALL display a validation error and prevent form submission

### Requirement: Store health data with user record
The system SHALL persist sex and blood type information as part of the user record.

#### Scenario: Health data is saved with user
- **WHEN** user successfully submits the registration form with sex and blood type
- **THEN** system SHALL store both fields in the user object alongside name and age

#### Scenario: Health data is retrievable
- **WHEN** system displays user information
- **THEN** system SHALL include sex and blood type in the user data display
