## ADDED Requirements

### Requirement: CSV export includes health data columns
The CSV export functionality SHALL include columns for sex and blood type in addition to existing name and age columns.

#### Scenario: CSV headers include health fields
- **WHEN** user exports data to CSV
- **THEN** the CSV file SHALL have headers: "Nome", "Idade", "Sexo", "Tipo Sanguíneo"

#### Scenario: CSV rows include health data values
- **WHEN** user exports data to CSV
- **THEN** each row SHALL contain the user's name, age, sex, and blood type values in the correct columns

### Requirement: CSV export maintains data integrity
The CSV export SHALL correctly format and encode health data for CSV compatibility.

#### Scenario: Health data is properly formatted
- **WHEN** user exports data containing sex and blood type information
- **THEN** system SHALL format each field correctly (no special characters breaking CSV structure)

#### Scenario: Empty health data is handled
- **WHEN** a user record has missing sex or blood type data
- **THEN** system SHALL export empty values for those fields without breaking the CSV structure
