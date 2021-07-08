export interface CustomerReportModel {
	contactInfo:            string;
	channel:                string;
	region:                 string;
	contactOption:          string;
	dsIDCountry:            string;
	dsIDLang:               string;
	geo:                    string;
	caseID:                 string;
	agentStation:           string;
	loggedInSwitchName:     string;
	loggedInSwitchLocation: string;
	emailID:                string;
	advisorDsID:            string;
	reasonCode:             string;
	reasonDesc:             string;
	comments:               string;
	commitmentID:           string;
	obcInitiatedTs:         number;
	server:					string;
}