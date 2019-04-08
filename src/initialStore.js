const initialStore = {
  count: 0,
  questions: [
    {
      pageTitle: "Who asked the questions (Data collectors)",
      questions: [
        {
          questionHeader: "Was the person asking the questions a professionally trained enumerator?",
          answers: [
            "Yes, professionally trained enumerator",
            "No, not professionally trained enumerator",
            "Unsure"
          ]
        },
        {
          questionHeader: "Was the person asking the questions a potential friend or neighbour?",
          answers: [
            "Yes",
            "No",
            "Unsure"
          ]
        },
        {
          questionHeader: "What the person collecting the questions the same gender as the respondent?",
          answers: [
            "Yes, always",
            "Yes, when possible",
            "No",
            "Unsure"
          ]
        },
        {
          questionHeader: "Was the person asking the questions of a higher status than the respondent, lower status than the respondent or same status?",
          answers: [
            "Person asking question was usually higher status",
            "Person asking question was usually same status",
            "Person asking question was usually lower status",
            "Unsure"
          ]
        }
      ]

    },
    {
      pageTitle: "Who answered the questions (Data respondents)",
      questions:
        [
          {
            questionHeader: "Who was present during the data collection other than the respondent?",
            answers: [
              "Only the respondent and enumerator were present",
              "Only the respondent, the enumerator, and those the respondent requested were present",
              "Many people were present",
              "Unsure"
            ]
          },
          {
            questionHeader: "How were respondents selected?",
            answers: [
              "Respondents were selected using a scientific randomization process",
              "Respondents were selected using a modified version of a scientific randomization process",
              "Respondents were selected using partly a scientific randomization process and partly convenience",
              "Respondents were selected randomly in the field by the data collectors",
              "Respondents were selected based on convenience",
              "Respondents were selected because they are part of a specific group",
              "Respondents were self-selected",
              "Unsure"
            ]
          },
          {
            questionHeader: "Were selected respondents followed-up with repeatedly until they answered?",
            answers: [
              "Yes, definitely",
              "Yes, probably",
              "No",
              "Unsure"
            ]
          },
          {
            questionHeader: "Were respondents selected based on the data collector’s choices?",
            answers: [
              "Yes, definitely",
              "Yes, probably",
              "No",
              "Unsure"
            ]
          },
          {
            questionHeader: "Were respondents selected based on the data collector’s choices?",
            answers: [
              "Yes",
              "No",
              "Unsure"
            ]
          }
        ]
    },
    {
      pageTitle: "Who did not answer the questions",
      questions: [
        {
          questionHeader: "Does the data include a record of respondents who declined to participate?",
          answers: [
            "Yes",
            "No",
            "Unsure"
          ]
        },
        {
          questionHeader: "Were groups of people intentionally not included? ",
          answers: [
            "For example, those living in institutions or those living in jail; or those not home at the time of data collection",
            "No one was intentionally not included",
            "Unsure"
          ]
        },
        {
          questionHeader: "What groups of people were accidentally not included?",
          answers: [
            "People who were not home or available at the time of data collection were accidentally not included",
            "Other people were accidentally not included",
            "No one was excluded from the survey by accident",
            "Unsure"
          ]
        }
      ]
    },
    {
      pageTitle: "What questions were asked?",
      questions: [
        {
          questionHeader: "In what format was the gender question asked?",
          answers: [
            "Binary, male/female",
            "Non-binary, several closed-format options",
            "Open ended",
            "No gender question asked",
            "Unsure"
          ]
        },
        {
          questionHeader: "How was the household status question asked?",
          answers: [
            "One question. Closed, on who is the head of the household",
            "One open-ended question",
            "Several questions about household status",
            "Enumerator or other external person decided who was head of household",
            "No question about household status",
            "Unsure"
          ]
        },
        {
          questionHeader: "How was the marriage/partnership question asked?",
          answers: [
            "One question on relationship status, closed ended question.",
            "Several questions on relationship status asked, closed ended.",
            "Open ended question about relationship status asked",
            "No relationship status question asked",
            "Unsure"
          ]
        },
        {
          questionHeader: "How was the work question asked?",
          answers: [
            "One question asked only about primary work",
            "Several questions asked only about primary work",
            "Several questions asked about both primary and secondary work",
            "No questions about work asked",
            "Unsure"
          ]
        },
        {
          questionHeader: "Were any questions were answered by the enumerator rather than directly by the respondents",
          answers: [
            "Yes, one questions was answered by the enumerators only",
            "Yes, several questions were answered by the enumerators only",
            "No questions were answered only by the enumerators",
            "Unsure"
          ]
        },
        {
          questionHeader: "Do the skip patterns used introduce potential bias?",
          answers: [
            "Yes, definitely",
            "Yes, probably",
            "No",
            "Unsure"
          ]
        }
      ]
    },
    {
      pageTitle: "Where",
      questions: [
        {
          questionHeader: "Where was the data collected?",
          answers:
            [
              "Public Space",
              "Private Space",
              "Homes",
              "Government Office",
              "Program/Service Location",
              "Unsure"
            ]
        },
        {
          questionHeader: "Who has access to the final data?",
          answers:
            [
              "Only the data collection organization has access to the data",
              "The data collection organization and the data respondents have access to the data",
              "The data collection organization and several other organizations have access to the data",
              "The data collection organization and the data respondents and several other organizations have access to the data",
              "The public has access to the data",
              "Other",
              "Unsure"
            ]
        },
        {
          questionHeader: "Is the place where the data was collected a place that raises or diminishes the respondent’s status?",
          answers:
            [
              "Location that raises respondents status",
              "Location that lowers the respondent’s status",
              "Combination",
              "Data collected online",
              "Unsure"
            ]
        }
      ]
    },
    {
      pageTitle: "Where",
      questions: [
        {
          questionHeader: "What tools/technology was used to collect the data?",
          answers:
            [
              "Pencil and Paper",
              "Tablets",
              "Remotely collected",
              "Combination",
              "Unsure"
            ]
        },
        {
          questionHeader: "How were the answers coded?",
          answers:
            [
              "Dataset contains the raw answers",
              "Dataset contains answers that have been coded by others",
              "Unsure"
            ]
        },
        {
          questionHeader: "What incentivization was offered for data collection?",
          answers:
            [
              "No external incentive was offered to data responders",
              "Data responders were given financial payment (cash or money transfer) for participation",
              "Data responders were given non-financial resources (like cell phone minutes or a gift card) for participation",
              "Data responders were given access to information for participation",
              "Data responders were given access to services for participation",
              "Other",
              "Unsure"
            ]
        },
        {
          questionHeader: "What level of ownership are the data producers being given?",
          answers:
            [
              "Respondents are given full access to the entire dataset",
              "Respondents are given full access to their data but cannot make change",
              "Respondents are given full access to their data with possibility to change or remove it",
              "Respondents are given no access to any part of the data",
              "Other",
              "Unsure"
            ]
        },
        {
          questionHeader: "What type of results are given to the data respondents?",
          answers:
            [
              "Respondents are given their personal results from the survey",
              "Respondents are given their personal results and the overall results from the survey",
              "Respondents are given only the overall results from the survey",
              "Respondents are given no access to data or results",
              "Unsure"
            ]
        },
        {
          questionHeader: "Was any part of this data taken from administrative databases?",
          answers:
            [
              "Yes",
              "No",
              "Unsure"
            ]
        }
      ]
    },
    {
      pageTitle: "Why",
      questions:
        [
          {
            questionHeader: "What is the primary data collection purpose?",
            answers:
              [
                "Program evaluation",
                "Government services",
                "Eligibility determination for a benefit",
                "Commercial purposes",
                "User experience or service design analysis",
                "Academic research purposes",
                "Unsure"
              ]
          },
          {
            questionHeader: "What is the secondary data collection purpose?",
            answers:
              [
                "Program evaluation",
                "Government services",
                "Eligibility determination for a benefit",
                "Commercial purposes",
                "User experience or service design analysis",
                "Academic research purposes",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an economic advantage (to data collectors) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an political advantage (to data collectors) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an personal advantage (to data collectors) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an economic advantage (to respondents) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an political advantage (to respondents) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is there an personal advantage (to respondents) to the numbers skewing in a particular direction?",
            answers:
              [
                "Yes, strongly",
                "Yes, a small amount",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is this data collected in connection with eligibility for a benefit?",
            answers:
              [
                "Yes",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is this data collected with a blinding process?",
            answers:
              [
                "Yes",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Is this data collected with informed consent?",
            answers:
              [
                "Yes, clearly",
                "Yes, but weakly",
                "No",
                "Unsure"
              ]
          }
        ]

    }, {
      pageTitle: "Data Post Processing Phase",
      questions:
        [
          {
            questionHeader: "Has the data been cleaned?",
            answers:
              [
                "Yes",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Have anomalies or outliers been accounted for or removed?",
            answers:
              [
                "Yes",
                "No",
                "Unsure"
              ]
          },
          {
            questionHeader: "Has missing data been deleted?",
            answers:
              [
                "Yes, questions with lots of missing data were deleted",
                "Yes, any respondent without totally complete data was deleted",
                "No",
                "Unsure"
              ]
          }

        ]
    }],
  pageNum: 8
};

export default initialStore;
