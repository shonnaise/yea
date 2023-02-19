const DisabledReasons = {
    Reason1: '精神上の障害により事理を弁識する能力を欠く常況にある人',
    Reason2: '児童相談所、知的障害者更生相談所、精神保健福祉センター、精神保健指定医の判定により、知的障害者と判定された人',
    Reason3: '精神保健及び精神障害者福祉に関する法律の規定により精神障害者保健福祉手帳の交付を受けている人',
    Reason4: '身体障害者福祉法の規定により交付を受けた身体障害者手帳に、身体上の障害がある人として記載されている人',
    Reason5: ''
} as const;

const disabilityCertificateTypes = ['身体障害者手帳', '療育手帳', '精神障害者保健福祉手帳'] as const;
export type DisabilityCertificateType = typeof disabilityCertificateTypes[number];

const mentalDisabilityCertificateGrades = ['1級', '2級', '3級'] as const;
export type MentalDisabilityCertificateGrade = typeof mentalDisabilityCertificateGrades[number];

const physicalDisabilityCertificateGrades = ['1級', '2級', '3級', '4級', '5級', '6級', '7級'] as const;
export type PhysicalDisabilityCertificateGrade = typeof physicalDisabilityCertificateGrades[number];

export type FactOfDisablity = {
    reason: DisabledReason,
    additionalReason: {
        certifiedByMunicipality: boolean,        
    }
    certificate: {
        physicalDisabilityCertificate: {
            grade: PhysicalDisabilityCertificateGrade
        },
        mentalDisabilityCertificate: {
            grade: MentalDisabilityCertificateGrade
        },
        intellectualDisabilityCertificate: {
            grade:
        }
    }
}

export type DisabledReason = typeof DisabledReasons;
