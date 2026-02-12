## ADDED Requirements

### Requirement: Registration includes timestamp
The system SHALL record the date and time of user registration and include this information in the exported CSV file as a new column.

#### Scenario: Timestamp is added on registration
- **WHEN** a user submits the registration form
- **THEN** the system SHALL generate a timestamp (in ISO 8601 format) and associate it with the user record

#### Scenario: CSV export includes timestamp column
- **WHEN** user data is exported to CSV
- **THEN** the CSV file SHALL include a column named "DataHoraCadastro" (or similar) containing the registration timestamp for each user

### Requirement: Timestamp is generated automatically
The timestamp SHALL be generated automatically by the system at the moment of registration, without user intervention.

#### Scenario: No manual timestamp entry
- **WHEN** a user fills out the registration form
- **THEN** the timestamp field SHALL NOT be editable or visible in the form, but SHALL be present in the exported CSV

## MODIFIED Requirements

### Requirement: Registration form includes health fields
The registration form SHALL include fields for biological sex and blood type in addition to existing name and age fields. Now, the registration timestamp is also recorded (not shown in the form, but present in the data model and CSV export).

#### Scenario: Form displays all required fields
- **WHEN** user views the registration form
- **THEN** system SHALL display input fields for: Nome Completo, Idade, Sexo, and Tipo Sanguíneo

#### Scenario: Form validates all fields before submission
- **WHEN** user attempts to submit the registration form
- **THEN** system SHALL validate that all four fields (name, age, sex, blood type) are properly filled

#### Scenario: Timestamp is recorded on registration
- **WHEN** a new user is registered
- **THEN** the user object SHALL contain properties: name, age, sex, bloodType, and registration timestamp

### Requirement: CSV export includes health data columns
The CSV export functionality SHALL include columns for sex and blood type in addition to existing name and age columns. Now, the CSV export also includes a timestamp column for registration date/time.

#### Scenario: CSV headers include health fields and timestamp
- **WHEN** user exports data to CSV
- **THEN** the CSV file SHALL have headers: "Nome", "Idade", "Sexo", "Tipo Sanguíneo", "DataHoraCadastro"

#### Scenario: CSV rows include health data values and timestamp
- **WHEN** user exports data to CSV
- **THEN** each row SHALL contain the user's name, age, sex, blood type, and registration timestamp values in the correct columns

#### Scenario: Empty health data is handled
- **WHEN** a user record has missing sex or blood type data
- **THEN** system SHALL export empty values for those fields without breaking the CSV structure; the timestamp field SHALL always be present
